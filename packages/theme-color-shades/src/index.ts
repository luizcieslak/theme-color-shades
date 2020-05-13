import shades, { ColorObj } from './shades'

export const sum = (a: number, b: number) => {
	if ('development' === process.env.NODE_ENV) {
		console.log('boop')
	}
	return a + b
}

export { ColorObj }

export default shades
