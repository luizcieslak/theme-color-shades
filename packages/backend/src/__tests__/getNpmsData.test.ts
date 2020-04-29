import getNpmsData from '../getNpmsData'

test('should retrieve info from npm package without org', async () => {
	const packageName = 'react'
	const npms = await getNpmsData(packageName)

	expect(npms).not.toBeUndefined()
	expect(npms).toHaveProperty('collected.metadata.name', 'react')
})

test('should retrieve info from npm package with org', async () => {
	const packageName = '@babel/core'
	const npms = await getNpmsData(packageName)

	expect(npms).not.toBeUndefined()
	expect(npms).toHaveProperty('collected.metadata.name', '@babel/core')
})

test('should give an error with non existent package', async () => {
	const packageName = 'this-not-exist-at-alll'
	const npms = await getNpmsData(packageName)

	expect(npms).not.toBeUndefined()
	expect(npms).toHaveProperty('code', 'NOT_FOUND')
	expect(npms).toHaveProperty('message', 'Module not found')
})

test('should give an error with non existent package in org', async () => {
	const packageName = '@babel/this-not-exist-at-alll'
	const npms = await getNpmsData(packageName)

	expect(npms).not.toBeUndefined()
	expect(npms).toHaveProperty('code', 'NOT_FOUND')
	expect(npms).toHaveProperty('message', 'Module not found')
})
