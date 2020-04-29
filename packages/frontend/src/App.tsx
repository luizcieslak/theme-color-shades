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
	for (let i = 9.5; i >= 0.5; i -= 1) {
		hsl.l = 0.1 * i
		shades.push('background-color: ' + tinyColor(hsl).toRgbString())
	}
	return shades
}

function CardColorHex({ hex, index }: { hex: string; index: number }) {
	const tinyObj = tinyColor(`#${hex}`)
	return (
		<Flex direction='column' alignItems='center' p={1} w='120px' border='1px'>
			<Box w='80px' h='80px' bg={tinyObj.toString()} />
			<Text fontSize='xs'>{(index + 1) * 100}</Text>
			<Text fontSize='sm'>{tinyObj.toHexString()}</Text>
			<Text fontSize='xs'>{tinyObj.toHslString()}</Text>
		</Flex>
	)
}

const App = () => {
	const [color, setColor] = useState('3e2f5b') // 500

	const obj = tinyColor(`#${color}`)

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

	const colorsInputArray = shadesMonochrome(`#${color}`)

	// const purple = shadesMonochrome(`#3e2f5b`)
	// const blueGIS = shadesMonochrome(`#59ccf2`)
	// const redGIS = shadesMonochrome(`#FC5A5A`)
	// const greenGIS = shadesMonochrome(`#3dd598`)
	// const grayGIS = shadesMonochrome(`#B5B5BE`)
	// const yellowGIS = shadesMonochrome(`#FF933C`)
	// const darkJungleGreen = shadesMonochrome(`#000F08`)

	const arrayOfArrayPredefinedColors = [
		shadesMonochrome(`#3e2f5b`),
		shadesMonochrome(`#59ccf2`),
		shadesMonochrome(`#FC5A5A`),
		shadesMonochrome(`#3dd598`),
		shadesMonochrome(`#B5B5BE`),
		shadesMonochrome(`#FF933C`),
		shadesMonochrome(`#000F08`)
	]

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
			<Box border='1px' p={4} m={4}>
				<Input type='text' value={color} onChange={(e: any) => setColor(e.target.value)} />
				<br />#{color}
				<br />
				{tinyColor(`#${color}`).toHslString()}
				<br />
				{/* <Flex justifyContent='center'>
				{[...lightened.reverse(), obj, ...darkened].map((color, index) => (
					<CardColor key={`cc-${index}`} tinyObj={color} index={index} />
				))}
			</Flex>
			<br />
			<Flex justifyContent='center'>
				{[...desaturated.reverse(), obj, ...saturated].map((color, index) => (
					<CardColor key={`cc-${index}`} tinyObj={color} index={index} />
				))}
			</Flex>
			<br />
			<Flex justifyContent='center'>
				{[...bothMinus.reverse(), obj, ...bothPlus].map((color, index) => (
					<CardColor key={`cc-${index}`} tinyObj={color} index={index} />
				))}
			</Flex> */}
				<br />
				<Flex justifyContent='center'>
					{colorsInputArray.map((color, index) => (
						<CardColorHex key={`cc-${index}`} hex={color} index={index} />
					))}
				</Flex>
			</Box>

			{arrayOfArrayPredefinedColors.map((arrayColors, index1) => (
				<Box key={`b-${index1}`} border='1px' p={4} m={4}>
					<Flex justifyContent='center'>
						{arrayColors.map((color, index2) => (
							<CardColorHex key={`ccx-${index2}`} hex={color} index={index2} />
						))}
					</Flex>
				</Box>
			))}
		</div>
	)
}

export default App
