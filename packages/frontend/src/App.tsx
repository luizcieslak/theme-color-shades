import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import tinyColor from 'tinycolor2'
import { Box, Input, Flex, Text } from '@chakra-ui/core'
import shadesMonochrome from './shadesMonochrome'
import shadesWithHueChange from './shadesWithHueChange'
import shadesWithSaturationChange from './shadesWithSaturationChange'

interface ColorObject {
	name: string
	originalColor: string
	method1: tinyColor.Instance[]
	method2: tinyColor.Instance[]
	method3: tinyColor.Instance[]
	method4: tinyColor.Instance[]
	method5: tinyColor.Instance[]
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

	// const inputColorMethod1 = shadesMonochrome(`#${inputColor}`)
	// const inputColorMethod2 = shadesWithHueChange(`#${inputColor}`)

	const colorsArray: Array<ColorObject> = [
		{
			name: 'purple',
			originalColor: '#3e2f5b',
			method1: shadesMonochrome(`#3e2f5b`),
			method2: shadesWithHueChange(`#3e2f5b`),
			method3: shadesWithHueChange(`#3e2f5b`, 5),
			method4: shadesWithSaturationChange(`#3e2f5b`),
			method5: shadesWithSaturationChange(`#3e2f5b`, 10)
		},

		{
			name: 'blueGIS',
			originalColor: '#59ccf2',
			method1: shadesMonochrome(`#59ccf2`),
			method2: shadesWithHueChange(`#59ccf2`),
			method3: shadesWithHueChange(`#59ccf2`, 5),
			method4: shadesWithSaturationChange(`#59ccf2`),
			method5: shadesWithSaturationChange(`#59ccf2`, 10)
		},
		{
			name: 'redGIS',
			originalColor: '#FC5A5A',
			method1: shadesMonochrome(`#FC5A5A`),
			method2: shadesWithHueChange(`#FC5A5A`),
			method3: shadesWithHueChange(`#FC5A5A`, 5),
			method4: shadesWithSaturationChange(`#FC5A5A`),
			method5: shadesWithSaturationChange(`#FC5A5A`, 10)
		},
		{
			name: 'brightYellow',
			originalColor: '#fce15a',
			method1: shadesMonochrome(`#fce15a`),
			method2: shadesWithHueChange(`#fce15a`),
			method3: shadesWithHueChange(`#fce15a`, 5),
			method4: shadesWithSaturationChange(`#fce15a`),
			method5: shadesWithSaturationChange(`#fce15a`, 10)
		},
		{
			name: 'greenGIS',
			originalColor: '#3dd598',
			method1: shadesMonochrome(`#3dd598`),
			method2: shadesWithHueChange(`#3dd598`),
			method3: shadesWithHueChange(`#3dd598`, 5),
			method4: shadesWithSaturationChange(`#3dd598`),
			method5: shadesWithSaturationChange(`#3dd598`, 10)
		},
		{
			name: 'grayGIS',
			originalColor: '#B5B5BE',
			method1: shadesMonochrome(`#B5B5BE`),
			method2: shadesWithHueChange(`#B5B5BE`),
			method3: shadesWithHueChange(`#B5B5BE`, 5),
			method4: shadesWithSaturationChange(`#B5B5BE`),
			method5: shadesWithSaturationChange(`#B5B5BE`, 10)
		},
		{
			name: 'yellowGIS',
			originalColor: '#FF933C',
			method1: shadesMonochrome(`#FF933C`),
			method2: shadesWithHueChange(`#FF933C`),
			method3: shadesWithHueChange(`#FF933C`, 5),
			method4: shadesWithSaturationChange(`#FF933C`),
			method5: shadesWithSaturationChange(`#FF933C`, 10)
		},
		{
			name: 'darkJungleGreen',
			originalColor: '#000F08',
			method1: shadesMonochrome(`#000F08`),
			method2: shadesWithHueChange(`#000F08`),
			method3: shadesWithHueChange(`#000F08`, 5),
			method4: shadesWithSaturationChange(`#000F08`),
			method5: shadesWithSaturationChange(`#000F08`, 10)
		}
	]

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Theme color shades</p>
			</header>
			{/* <Box border='1px' p={4} m={4}>
				<Input type='text' value={inputColor} onChange={(e: any) => setInputColor(e.target.value)} />
				<br />
				<Flex justifyContent='center' pb={2}>
					<CardColorHex hex={inputColor} name='color from input' />
				</Flex>
				<Flex justifyContent='center' alignItems='center'>
					<Text pr={4}>Method 1</Text>
					{inputColorMethod1.map((color, i) => (
						<CardColorHex key={`cc-${i}`} hex={color.toHexString()} index={i} />
					))}
				</Flex>
				<Flex justifyContent='center' alignItems='center'>
					<Text pr={4}>Method 2</Text>
					{inputColorMethod2.map((color, i) => (
						<CardColorHex key={`cc-${i}`} hex={color.toHexString()} index={i} />
					))}
				</Flex>
			</Box> */}

			{colorsArray.map((colorObject, i) => (
				<Box key={`b-${i}`} border='1px' p={4} m={4}>
					<Flex justifyContent='center' pb={2}>
						<CardColorHex hex={colorObject.originalColor} name={colorObject.name} />
					</Flex>
					<Flex justifyContent='center' alignItems='center'>
						<Text pr={4}>Method 1</Text>
						{colorObject.method1.map((color, i2) => (
							<CardColorHex key={`ccx-${i2}`} hex={color.toHexString()} index={i2} />
						))}
					</Flex>

					<Flex justifyContent='center' alignItems='center'>
						<Text pr={4}>Method 2</Text>
						{colorObject.method2.map((color, i2) => (
							<CardColorHex key={`ccx-${i2}`} hex={color.toHexString()} index={i2} />
						))}
					</Flex>

					<Flex justifyContent='center' alignItems='center'>
						<Text pr={4}>Method 3</Text>
						{colorObject.method3.map((color, i2) => (
							<CardColorHex key={`ccx-${i2}`} hex={color.toHexString()} index={i2} />
						))}
					</Flex>

					<Flex justifyContent='center' alignItems='center'>
						<Text pr={4}>Method 4</Text>
						{colorObject.method4.map((color, i2) => (
							<CardColorHex key={`ccx-${i2}`} hex={color.toHexString()} index={i2} />
						))}
					</Flex>

					<Flex justifyContent='center' alignItems='center'>
						<Text pr={4}>Method 5</Text>
						{colorObject.method5.map((color, i2) => (
							<CardColorHex key={`ccx-${i2}`} hex={color.toHexString()} index={i2} />
						))}
					</Flex>
				</Box>
			))}
		</div>
	)
}

export default App
