import React from 'react'
import shadesMonochrome from './shadesMonochrome'
import shadesWithHueChange from './shadesWithHueChange'
import shadesWithSaturationChange from './shadesWithSaturationChange'

interface ShadesArgs {
	color: string
	saturation?: {
		factor?: number
	}
	hue?: {
		factor?: number
	}
}

export default function shades({ hue, saturation, color }: ShadesArgs) {
	// All shades uses lightness modification
	let colorsArray = shadesMonochrome(color)

	if (hue) {
		colorsArray = shadesWithHueChange(colorsArray, hue.factor || 1.8)
	}

	if (saturation) {
		colorsArray = shadesWithSaturationChange(colorsArray, saturation.factor || 10)
	}

	return colorsArray
}
