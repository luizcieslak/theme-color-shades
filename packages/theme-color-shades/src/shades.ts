import shadesMonochrome from './shadesMonochrome'
import shadesWithHueChange from './shadesWithHueChange'
import shadesWithSaturationChange from './shadesWithSaturationChange'

interface ShadesArgs {
	color: string
	saturation:
		| {
				factor: number
		  }
		| boolean
	hue:
		| {
				factor: number
		  }
		| boolean
}

export default function shades({ hue, saturation, color }: ShadesArgs) {
	// All shades uses lightness modification
	let colorsArray = shadesMonochrome(color)

	if (hue) {
		if (typeof hue === 'object') {
			colorsArray = shadesWithHueChange(colorsArray, hue.factor)
		} else {
			colorsArray = shadesWithHueChange(colorsArray, 1.8)
		}
	}

	if (saturation) {
		if (typeof saturation === 'object') {
			colorsArray = shadesWithSaturationChange(colorsArray, saturation.factor)
		} else {
			colorsArray = shadesWithSaturationChange(colorsArray, 5)
		}
	}
	return colorsArray
}
