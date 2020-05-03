import tinyColor from 'tinycolor2'
import shadesMonochrome from './shadesMonochrome'

/**
 * Create a array of shades from input, using shadesMonochrome to change lightness and add a hue modification.
 * @param color hex color
 */
export default function shadesWithHueChange(colorInput: string, factor = 1.8) {
	const shadesMonochromeArray = shadesMonochrome(colorInput)

	const hslInput = tinyColor(colorInput).toHsl()

	// Here the hue changes between +-9 degrees
	const lightenedHalf = []
	const darkenedHalf = []

	const brightestHues = [60, 180, 300]
	const darkestHues = [0, 120, 240, 360] // 0 and 360 are the same

	// Get distance from current hue to brightest degrees
	const distanceFromBrightest = brightestHues.map(h => hslInput.h - h)
	const distanceFromBrightestAbs = distanceFromBrightest.map(d => Math.abs(d))
	console.log('distanceFromBrightest', distanceFromBrightest, hslInput.h, tinyColor(colorInput).toHslString())

	// Get the distance from the array of absolute values
	const minDistanceBrightestAbs = Math.min(...distanceFromBrightestAbs)
	console.log('minDistance', minDistanceBrightestAbs)
	// Since the arrays are equivalent, get the index of the shortest distance
	const indexMinDistanceFromBrightest = distanceFromBrightestAbs.indexOf(minDistanceBrightestAbs)
	console.log('indexMinDistanceFromBrightest', indexMinDistanceFromBrightest)

	// change the factor if there is no room to iterate 5 times
	if (minDistanceBrightestAbs < factor * 5) {
		factor = minDistanceBrightestAbs / 5
	}

	for (let i = 0; i < 5; i++) {
		console.log(
			'pushing to array',
			hslInput.h,
			factor,
			i,
			Math.sign(distanceFromBrightest[indexMinDistanceFromBrightest]),
			factor * i * Math.sign(distanceFromBrightest[indexMinDistanceFromBrightest])
		)
		const hue = hslInput.h + factor * i * Math.sign(distanceFromBrightest[indexMinDistanceFromBrightest]) * -1
		lightenedHalf.push(hue)
	}

	// repeat the same process for darkest
	factor = 1.8

	const distanceFromDarkest = darkestHues.map(h => hslInput.h - h)
	const distanceFromDarkestAbs = distanceFromDarkest.map(d => Math.abs(d))
	console.log('distanceFromDarkest', distanceFromDarkest, hslInput.h, tinyColor(colorInput).toHslString())

	// const minDistanceDarkest = Math.min(...distanceFromDarkest)
	const minDistanceDarkestAbs = Math.min(...distanceFromDarkestAbs)
	console.log('minDistanceDarkestAbs', minDistanceDarkestAbs)
	const indexMinDistanceFromDarkest = distanceFromDarkestAbs.indexOf(minDistanceDarkestAbs)
	console.log('indexMinDistanceFromDarkest', indexMinDistanceFromDarkest)

	if (minDistanceDarkestAbs < factor * 5) {
		factor = minDistanceDarkestAbs / 5
	}

	for (let i = 0; i < 5; i++) {
		console.log(
			'pushing to array',
			hslInput.h,
			factor,
			i,
			Math.sign(distanceFromDarkest[indexMinDistanceFromDarkest]),
			factor * i * Math.sign(distanceFromDarkest[indexMinDistanceFromDarkest])
		)
		const hue = hslInput.h + factor * i * Math.sign(distanceFromDarkest[indexMinDistanceFromDarkest]) * -1
		darkenedHalf.push(hue)
	}

	console.log('lightenedHalf', lightenedHalf)
	console.log('darkenedHalf', darkenedHalf)

	const HueArray = [...lightenedHalf.reverse(), ...darkenedHalf]
	console.log('HueArray', HueArray)

	return shadesMonochromeArray.slice().map((color, i) => {
		const hslColor = tinyColor(color).toHsl()
		hslColor.h = HueArray[i]

		return tinyColor(hslColor).toHexString()
	})
}
