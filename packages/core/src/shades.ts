import tinyColor from 'tinycolor2'

import shadesMonochrome from './shadesMonochrome'
import shadesWithHueChange from './shadesWithHueChange'
import shadesWithSaturationChange from './shadesWithSaturationChange'

interface ShadesArgs {
	color: string
	saturation?:
		| {
				factor: number
		  }
		| boolean
	hue?:
		| {
				factor: number
		  }
		| boolean
	outputFormat?: 'array' | 'object' | 'tinycolor'
}

export interface ColorObj {
	50: string
	100: string
	200: string
	300: string
	400: string
	500: string
	600: string
	700: string
	800: string
	900: string
}

export default function shades({
	hue,
	saturation,
	color,
	outputFormat = 'tinycolor',
}: ShadesArgs): tinycolor.Instance[] | string[] | ColorObj {
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

	let output: tinycolor.Instance[] | string[] | ColorObj = colorsArray // already an array of tinycolor

	if (outputFormat === 'array') {
		output = output.slice().map((color: tinycolor.Instance) => color.toHexString())
	}

	if (outputFormat === 'object') {
		const objOutput = (output as tinyColor.Instance[]).reduce((acc, val, index) => {
			const key = index > 0 ? index * 100 : 50
			// acc[key.toString()] = val.toHexString()
			return {
				...acc,
				[key]: val.toHexString(),
			}
		}, {})

		output = objOutput as ColorObj
	}

	return output
}
