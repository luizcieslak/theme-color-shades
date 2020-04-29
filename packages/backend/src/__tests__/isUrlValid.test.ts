import { isUrlValid } from '../isUrlValid'
import parseUrl, { ParseUrlResponse } from '../parseUrl'

test('should parse npm url', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://www.npmjs.com/react')
	const valid = await isUrlValid(testUrl)

	expect(valid).not.toBeUndefined()
	expect(valid).toHaveProperty('name', 'react')
})

test('should parse npm url with org', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://www.npmjs.com/@crello/react-lottie')
	const valid = await isUrlValid(testUrl)

	expect(valid).not.toBeUndefined()
	expect(valid).toHaveProperty('name', '@crello/react-lottie')
})

test('should not parse invalid npm url', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://www.npmjs.com/@this/does-not-exist')

	try {
		await isUrlValid(testUrl)
	} catch (e) {
		expect(e.message).toMatch('Package `@this/does-not-exist` could not be found')
	}
})

test('should parse npm url without www subdomain', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://npmjs.com/react')
	const valid = await isUrlValid(testUrl)

	expect(valid).not.toBeUndefined()
	expect(valid).toHaveProperty('name', 'react')
})

test('should parse npm url without with the /package/ prefix', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://npmjs.com/package/react')
	const valid = await isUrlValid(testUrl)

	expect(valid).not.toBeUndefined()
	expect(valid).toHaveProperty('name', 'react')
})

test('should parse npm url without with the /package/ prefix with org', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://npmjs.com/package/@crello/react-lottie')
	const valid = await isUrlValid(testUrl)

	expect(valid).not.toBeUndefined()
	expect(valid).toHaveProperty('name', '@crello/react-lottie')
})

test('should parse github url, no org in github, no org in npm', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://github.com/sindresorhus/package-json')
	const valid = await isUrlValid(testUrl)

	expect(valid).not.toBeUndefined()
	expect(valid).toHaveProperty('name', 'package-json')
})

test('should parse github url, org in github, no org in npm', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://github.com/reakit/reakit')
	const valid = await isUrlValid(testUrl)

	expect(valid).not.toBeUndefined()
	expect(valid).toHaveProperty('name', 'reakit')
})

test('should parse github url, org in github, org in npm', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://github.com/crello/react-lottie')
	const valid = await isUrlValid(testUrl)

	expect(valid).not.toBeUndefined()
	expect(valid).toHaveProperty('name', '@crello/react-lottie')
})

test('should parse github url, org in github, no org in npm, package inside monorepo', async () => {
	const testUrl: ParseUrlResponse = parseUrl(
		'https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp'
	)
	const valid = await isUrlValid(testUrl)

	expect(valid).not.toBeUndefined()
	expect(valid).toHaveProperty('name', 'gatsby-plugin-sharp')
})

test('should parse github url, monorepo like babel', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://github.com/babel/babel/tree/master/packages/babel-core')
	const valid = await isUrlValid(testUrl)

	expect(valid).not.toBeUndefined()
	expect(valid).toHaveProperty('name', '@babel/core')
})

test('should parse github url with www subdomain', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://www.github.com/babel/babel/tree/master/packages/babel-core')
	const valid = await isUrlValid(testUrl)

	expect(valid).not.toBeUndefined()
	expect(valid).toHaveProperty('name', '@babel/core')
})

test('should not parse invalid github url', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://github.com/this/does-not-exist-yes')
	const valid = await isUrlValid(testUrl)

	expect(valid).toBeUndefined()
})

test('should not parse github profile url', async () => {
	const testUrl: ParseUrlResponse = parseUrl('https://github.com/luizcieslak')
	const valid = await isUrlValid(testUrl)

	expect(valid).toBeUndefined()
})
