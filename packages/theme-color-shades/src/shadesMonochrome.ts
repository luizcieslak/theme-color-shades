import tinyColor from 'tinycolor2'

/**
 * Create a array of shades from input, change only Lightness in HSL.
 * @param color hex color
 */
export default function shadesMonochrome(color: string) {
	const shades = []

	const hsl = tinyColor(color).toHsl()
	// for (let i = 9.5; i >= 0.8; i -= 0.87) {
	for (let i = 9.5; i >= 0.5; i -= 1) {
		hsl.l = 0.1 * i
		shades.push(tinyColor(hsl))
	}
	return shades
}
