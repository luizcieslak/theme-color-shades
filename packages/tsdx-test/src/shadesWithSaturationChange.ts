import tinyColor from 'tinycolor2'

function applySaturationFactorsinHalf(halfArray: tinyColor.Instance[], factor: number) {
	const saturatedArray = halfArray.slice()

	saturatedArray[0].saturate(3 * factor)
	saturatedArray[1].saturate(2 * factor)
	saturatedArray[2].saturate(1 * factor)

	//console.log('applySaturationFactorsinHalf', saturatedArray[3].toHsl().s, saturatedArray[3].toHsl())

	// I chose not multiply this below by integer numbers (e.g 1 and 2)
	// to not become too deep ahd to has a shape more like a parable
	if (saturatedArray[3].toHsl().s >= 0.1) {
		saturatedArray[3].desaturate(0.6 * factor)
	}

	if (saturatedArray[4].toHsl().s >= 0.1) {
		saturatedArray[4].desaturate(1.2 * factor)
	}

	return saturatedArray
}

/**
 * Create a array of shades from input, using shadesWithHueChange to change hue + lightness and add a saturation change.
 * @param color hex color
 */
export default function shadesWithSaturationChange(colorInputArray: tinyColor.Instance[], factor = 1.8) {
	// folded in half, the operations are the same (check the graph, is a parabole)
	let arrayFirstHalf = colorInputArray.slice(0, 5)
	let arraySecondHalf = colorInputArray.slice(5, 10)

	arrayFirstHalf = applySaturationFactorsinHalf(arrayFirstHalf, factor)
	arraySecondHalf = applySaturationFactorsinHalf(arraySecondHalf.reverse(), factor).reverse()

	return [...arrayFirstHalf, ...arraySecondHalf]
}
