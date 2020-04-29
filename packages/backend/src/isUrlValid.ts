import packageJson from 'package-json'

import URL from 'url'
import { ParseUrlResponse } from './parseUrl'

const isUrlValid = async (parsedUrl: ParseUrlResponse) => {
	return parsedUrl.type === 'NPM' ? isNpmUrlValid(parsedUrl.url) : isGithubUrlValid(parsedUrl.url)
}

const isGithubUrlValid = async (url: URL.UrlWithStringQuery) => {
	// github url could be the following:
	// 1 https://github.com/sindresorhus/package-json -> 'package-json'
	// 2 https://github.com/crello/react-lottie -> '@crello/react-lottie'
	// 3 https://github.com/reakit/reakit -> package in npm is 'reakit' (org in github, not in npm)
	// 4 https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp -> 'gatsby-plugin-sharp'
	// 5 https://github.com/babel/babel/tree/master/packages/babel-core -> '@babel/core' the hardest one

	const splitSlashArray = (url.pathname?.replace('/', '') as string).split('/')

	// 2
	// should run first, because there is package names with the same name, one without org
	// e.g. react-lottie and @crello/react-lottie
	try {
		const packageName = `@${splitSlashArray[0]}/${splitSlashArray[1]}`
		console.log(`Trying to validate ${packageName}`)
		return await checkRegistry(packageName)
	} catch (error) {
		console.warn('Method 2 of isGithubUrlValid failed.')
	}

	// 5
	try {
		const prepackageName = splitSlashArray[splitSlashArray.length - 1]
		const prepackageNameSplitArray = prepackageName.split('-')
		const packageName = `@${prepackageNameSplitArray[0]}/${prepackageNameSplitArray[1]}`
		console.log(`Trying to validate ${packageName}`)
		return await checkRegistry(packageName)
	} catch (error) {
		console.warn('Method 5 of isGithubUrlValid failed.')
	}

	// 1 and 3 and 4
	try {
		const packageName = splitSlashArray[splitSlashArray.length - 1]
		console.log(`Trying to validate ${packageName}`)
		return await checkRegistry(packageName)
	} catch (error) {
		console.warn('Method 1, 3 or 4 of isGithubUrlValid failed.')
	}
}

const isNpmUrlValid = async (url: URL.UrlWithStringQuery) => {
	// npm url could be the following:
	// https://www.npmjs.com/@crello/react-lottie
	// https://www.npmjs.com/package/@crello/react-lottie
	const packageName = (url.pathname as string).replace('/package', '').replace('/', '')
	// after that we have: @crello/react-lottie
	return await checkRegistry(packageName)
}

const checkRegistry = async (packageName: string) => await packageJson(packageName)

export { isUrlValid }
