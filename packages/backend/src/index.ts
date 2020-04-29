// If i import them like this: import * as Koa from ...
// gives an error.

import Koa from 'koa'
import Router from 'koa-router'

import { ApolloServer, gql } from 'apollo-server-koa'

import { readFileSync, readdirSync } from 'fs'
import { join as pathJoin } from 'path'

// import helloQuery from './graphql/queries/hello'

////////////////////////////////////////// REST IMPLEMENTATION /////////////////////////////////////////////
// import logger from 'koa-logger'
// import json from 'koa-json'
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const app = new Koa()
const router = new Router()

// import parseUrl from './parseUrl'
// import { isUrlValid } from './isUrlValid'

// import getNpmsData from './getNpmsData'

////////////////////////////////////////// REST IMPLEMENTATION /////////////////////////////////////////////
// router.get('/', async (ctx, next) => {
// 	// First try: ger url from query param, parse it
// 	let parsedUrl // TODO: type this
// 	try {
// 		parsedUrl = parseUrl(ctx.query.url)
// 		console.log(JSON.stringify(parsedUrl))
// 	} catch (error) {
// 		ctx.status = 400
// 		throw error
// 	}

// 	// second try: check if npm or gh url is valid
// 	// Todo: this could be in the same try above.
// 	try {
// 		const checkRegistry = await isUrlValid(parsedUrl)
// 		// console.log(checkRegistry)
// 		const npmsData = await getNpmsData(checkRegistry?.name || '') //TODO: fix this type thing
// 		console.log(npmsData)
// 		ctx.body = { msg: `Hello world!, the repo is ${ctx.query.url}`, registry: checkRegistry, npms: npmsData }
// 	} catch (error) {
// 		ctx.status = 400
// 		throw error
// 	}

// 	await next()
// })

// // Middlewares
// // error handling. see: https://github.com/koajs/koa/blob/master/docs/error-handling.md#default-error-handler
// app.use(async (ctx, next) => {
// 	try {
// 		await next()
// 	} catch (err) {
// 		err.status = err.statusCode || err.status || 500
// 		ctx.body = err.message
// 		ctx.app.emit('error', err, ctx)
// 	}
// })

// app.use(json())
// app.use(logger())

// // Routes
// app.use(router.routes()).use(router.allowedMethods())
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// from: https://dev.to/kbariotis/setting-up-a-graphql-server-with-typescript-38le
const errorHandler = err => {
	console.log('Error while running resolver', {
		error: err
	})

	// Hide all internals by default
	return new Error('Internal server error')
}

// Fetch all schema definition files
// .graphql files aren't compiled inside lib folder
const schemaFiles = readdirSync(pathJoin(__dirname, '../../src/', 'graphql/schema')).filter(
	file => file.indexOf('.graphql') > 0
)

// Concatanate them to create our schema
const schema = schemaFiles
	.map(file => readFileSync(pathJoin(__dirname, '../../src/', `graphql/schema/${file}`)).toString())
	.join()

// Based on these files, bring their respective query resolvers
const queryResolvers = schemaFiles
	.map(file => file.replace('.graphql', ''))
	.map(file => require(pathJoin(__dirname, `graphql/queries/${file}`)).default)
	.reduce(
		(initial, current) => ({
			...initial,
			...current.Query
		}),
		{}
	)

const server = new ApolloServer({
	typeDefs: gql(`
			type Query
	
			schema {
				query: Query
			}
	
			${schema}
		`),
	resolvers: {
		Query: queryResolvers
	},
	formatError: errorHandler
})

router.post('/graphql', server.getMiddleware())
router.get('/graphql', server.getMiddleware())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3001, () => {
	console.log('Koa started')
})
