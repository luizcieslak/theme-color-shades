import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import tinyColor from 'tinycolor2'
import { Box, Input, Flex, Text } from '@chakra-ui/core'

/**
 * Create a array of shades from input, change only Lightness in HSL.
 * @param color hex color
 */
function shadesMonochrome(color: string) {
	const shades = []

	const hsl = tinyColor(color).toHsl()
	for (let i = 9.5; i >= 0.8; i -= 0.87) {
		hsl.l = 0.1 * i
		shades.push(tinyColor(hsl).toHexString())
	}
	return shades
}

/**
 * Create a array of shades from input, using shadesMonochrome to change lightness and add a hue modification.
 * @param color hex color
 */
function shadesWithHueChange(colorInput: string) {
	const shadesMonochromeArray = shadesMonochrome(colorInput)

	const hslInput = tinyColor(colorInput).toHsl()

	// Here the hue changes between +-9 degrees
	let factor = 1.8
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

interface ColorObject {
	name: string
	originalColor: string
	method1: string[]
	method2: string[]
}

interface CardColorProps {
	hex: string
	index?: number
	name?: string
}

function CardColorHex({ hex, index, name }: CardColorProps) {
	const tinyObj = tinyColor(`${hex}`)

	let shadeNumber
	if (typeof index === 'number') {
		shadeNumber = index > 0 ? index * 100 : 50
	}

	return (
		<Flex direction='column' alignItems='center' px={1} py={2} boxShadow='md' minW='120px' minH='160px'>
			{name && <Text fontSize='sm'>{name}</Text>}
			<Box w='80px' h='80px' bg={tinyObj.toString()} />
			{<Text fontSize='xs'>{shadeNumber}</Text>}
			<Text fontSize='sm'>{tinyObj.toHexString()}</Text>
			<Text fontSize='xs'>{tinyObj.toHslString()}</Text>
		</Flex>
	)
}

const App = () => {
	const [inputColor, setInputColor] = useState('3e2f5b')
	// const tinyObjInputColor = tinyColor(`#${inputColor}`)

	// // darken 4 colors: 600, 700, 800, 900
	// const darkened = Array(4)
	// 	.fill(0)
	// 	.map((el, i) => {
	// 		return obj.clone().darken((i + 1) * 10)
	// 	})

	// // lighten 4 colors: 100, 200, 300, 400
	// const lightened = Array(4)
	// 	.fill(0)
	// 	.map((el, i) => {
	// 		return obj.clone().lighten((i + 1) * 10)
	// 	})

	// // darken 4 colors: 600, 700, 800, 900
	// const saturated = Array(4)
	// 	.fill(0)
	// 	.map((el, i) => {
	// 		return obj.clone().saturate((i + 1) * 10)
	// 	})

	// // lighten 4 colors: 100, 200, 300, 400
	// const desaturated = Array(4)
	// 	.fill(0)
	// 	.map((el, i) => {
	// 		return obj.clone().desaturate((i + 1) * 10)
	// 	})

	// // darken 4 colors: 600, 700, 800, 900
	// const bothPlus = Array(4)
	// 	.fill(0)
	// 	.map((el, i) => {
	// 		return obj
	// 			.clone()
	// 			.darken((i + 1) * 10)
	// 			.saturate((i + 1) * 10)
	// 	})

	// // lighten 4 colors: 100, 200, 300, 400
	// const bothMinus = Array(4)
	// 	.fill(0)
	// 	.map((el, i) => {
	// 		return obj
	// 			.clone()
	// 			.lighten((i + 1) * 10)
	// 			.desaturate((i + 1) * 10)
	// 	})

	const inputColorMethod1 = shadesMonochrome(`#${inputColor}`)
	const inputColorMethod2 = shadesWithHueChange(`#${inputColor}`)

	const colorsArray: Array<ColorObject> = [
		{
			name: 'purple',
			originalColor: '#3e2f5b',
			method1: shadesMonochrome(`#3e2f5b`),
			method2: shadesWithHueChange(`#3e2f5b`)
		},

		{
			name: 'blueGIS',
			originalColor: '#59ccf2',
			method1: shadesMonochrome(`#59ccf2`),
			method2: shadesWithHueChange(`#59ccf2`)
		},
		{
			name: 'redGIS',
			originalColor: '#FC5A5A',
			method1: shadesMonochrome(`#FC5A5A`),
			method2: shadesWithHueChange(`#FC5A5A`)
		},
		{
			name: 'brightYellow',
			originalColor: '#fce15a',
			method1: shadesMonochrome(`#fce15a`),
			method2: shadesWithHueChange(`#fce15a`)
		},
		{
			name: 'greenGIS',
			originalColor: '#3dd598',
			method1: shadesMonochrome(`#3dd598`),
			method2: shadesWithHueChange(`#3dd598`)
		},
		{
			name: 'grayGIS',
			originalColor: '#B5B5BE',
			method1: shadesMonochrome(`#B5B5BE`),
			method2: shadesWithHueChange(`#B5B5BE`)
		},
		{
			name: 'yellowGIS',
			originalColor: '#FF933C',
			method1: shadesMonochrome(`#FF933C`),
			method2: shadesWithHueChange(`#FF933C`)
		},
		{
			name: 'darkJungleGreen',
			originalColor: '#000F08',
			method1: shadesMonochrome(`#000F08`),
			method2: shadesWithHueChange(`#000F08`)
		}
	]

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Theme color shades</p>
			</header>
			<Box border='1px' p={4} m={4}>
				<Input type='text' value={inputColor} onChange={(e: any) => setInputColor(e.target.value)} />
				<br />
				<Flex justifyContent='center' pb={2}>
					<CardColorHex hex={inputColor} name='color from input' />
				</Flex>
				<Flex justifyContent='center' alignItems='center'>
					<Text pr={4}>Method 1</Text>
					{inputColorMethod1.map((color, i) => (
						<CardColorHex key={`cc-${i}`} hex={color} index={i} />
					))}
				</Flex>
				<Flex justifyContent='center' alignItems='center'>
					<Text pr={4}>Method 2</Text>
					{inputColorMethod2.map((color, i) => (
						<CardColorHex key={`cc-${i}`} hex={color} index={i} />
					))}
				</Flex>
			</Box>

			{colorsArray.map((colorObject, i) => (
				<Box key={`b-${i}`} border='1px' p={4} m={4}>
					<Flex justifyContent='center' pb={2}>
						<CardColorHex hex={colorObject.originalColor} name={colorObject.name} />
					</Flex>
					<Flex justifyContent='center' alignItems='center'>
						<Text pr={4}>Method 1</Text>
						{colorObject.method1.map((color, i2) => (
							<CardColorHex key={`ccx-${i2}`} hex={color} index={i2} />
						))}
					</Flex>

					<Flex justifyContent='center' alignItems='center'>
						<Text pr={4}>Method 2</Text>
						{colorObject.method2.map((color, i2) => (
							<CardColorHex key={`ccx-${i2}`} hex={color} index={i2} />
						))}
					</Flex>
				</Box>
			))}
		</div>
	)
}

export default App
