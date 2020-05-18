import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import tinyColor from 'tinycolor2'
import { Box, Flex, Text, Input } from '@chakra-ui/core'
import shades from 'theme-color-shades'
import CardColorHex from '../components/ CardColorHex'

interface ColorObject {
	name: string
	originalColor: string
	method: tinyColor.Instance[]
}

const DebugPage: React.FC = () => {
	const [inputColor, setInputColor] = useState('d31233')

	// console.log('test', shades({ color: `#3e2f5b`, hue: true, saturation: true, outputFormat: 'array' }))
	// console.log('test2', shades({ color: `#3e2f5b`, hue: true, saturation: true, outputFormat: 'object' }))
	const colorObjectInput: ColorObject = {
		name: 'color from input',
		originalColor: `#${inputColor}`,
		method: shades({ color: `#${inputColor}`, hue: true, saturation: true }) as tinyColor.Instance[]
	}

	const colorsArray: Array<ColorObject> = [
		{
			name: 'purple',
			originalColor: '#3e2f5b',
			method: shades({ color: `#3e2f5b`, hue: true, saturation: true }) as tinyColor.Instance[]
		},

		{
			name: 'blueGIS',
			originalColor: '#59ccf2',
			method: shades({ color: `#59ccf2`, hue: true, saturation: true }) as tinyColor.Instance[]
		},
		{
			name: 'redGIS',
			originalColor: '#FC5A5A',
			method: shades({ color: `#FC5A5A`, hue: true, saturation: true }) as tinyColor.Instance[]
		},
		{
			name: 'brightYellow',
			originalColor: '#fce15a',
			method: shades({ color: `#fce15a`, hue: true, saturation: true }) as tinyColor.Instance[]
		},
		{
			name: 'greenGIS',
			originalColor: '#3dd598',
			method: shades({ color: `#3dd598`, hue: true, saturation: true }) as tinyColor.Instance[]
		},
		{
			name: 'grayGIS',
			originalColor: '#B5B5BE',
			method: shades({ color: `#B5B5BE`, hue: true, saturation: true }) as tinyColor.Instance[]
		},
		{
			name: 'yellowGIS',
			originalColor: '#FF933C',
			method: shades({ color: `#FF933C`, hue: true, saturation: true }) as tinyColor.Instance[]
		},
		{
			name: 'darkJungleGreen',
			originalColor: '#000F08',
			method: shades({ color: `#000F08`, hue: true, saturation: true }) as tinyColor.Instance[]
		}
	]

	return (
		<Layout>
			<Box border='1px' p={4} m={4}>
				<Input type='text' value={inputColor} onChange={(e: any) => setInputColor(e.target.value)} />
				<Flex justifyContent='center' pb={2}>
					<CardColorHex hex={colorObjectInput.originalColor} name={colorObjectInput.name} />
				</Flex>
				<br />
				<Flex justifyContent='center' alignItems='center'>
					<Text pr={4}>Method</Text>
					{colorObjectInput.method.map((color, i2) => (
						<CardColorHex key={`ccx-${i2}`} hex={color.toHexString()} index={i2} />
					))}
				</Flex>
			</Box>

			{colorsArray.map((colorObject, i) => (
				<Box key={`b-${i}`} border='1px' p={4} m={4}>
					<Flex justifyContent='center' pb={2}>
						<CardColorHex hex={colorObject.originalColor} name={colorObject.name} />
					</Flex>
					<Flex justifyContent='center' alignItems='center'>
						<Text pr={4}>Method</Text>
						{colorObject.method.map((color, i2) => (
							<CardColorHex key={`ccx-${i2}`} hex={color.toHexString()} index={i2} />
						))}
					</Flex>
				</Box>
			))}
		</Layout>
	)
}

export default DebugPage
