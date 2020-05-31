import React, { useState, useEffect } from 'react'
import qs from 'query-string'
import tinyColor from 'tinycolor2'

import Layout from '../components/layout'
import shades, { ColorObj } from '@theme-color-shades/core'
import Shades from '../components/Shades'
import DemoComponents from '../components/DemoComponents'
import theme, { CustomTheme } from '../theme'
import {
	FormLabel,
	RadioGroup,
	Radio,
	Textarea,
	useClipboard,
	Button,
	Stack,
	Box,
	Text,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Flex
} from '@chakra-ui/core'

const Components = () => {
	const [format, setFormat] = useState<string>('object')

	const [hueFactor, setHueFactor] = useState(2)
	const [saturationFactor, setSaturationFactor] = useState(12)

	const [color, setColor] = useState('')

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const query = qs.parse(window.location.search)

			if ('color' in query) {
				setColor(query.color as string)
			} else {
				setColor(
					tinyColor
						.random()
						.toHexString()
						.split('#')[1] // if none is passed, random color is selected.
				)
			}
		}
	}, [])

	// const shadesTinyColor = shades({ color, hue: { factor: hueFactor }, saturation: { factor: saturationFactor } })
	const shadesArray = shades({
		color,
		hue: { factor: hueFactor },
		saturation: { factor: saturationFactor },
		outputFormat: 'array'
	})

	const shadesObject = (shadesArray as string[]).reduce((acc, val, index) => {
		const key = index > 0 ? index * 100 : 50
		return {
			...acc,
			[key]: val
		}
	}, {})

	const { onCopy, hasCopied } = useClipboard(JSON.stringify(format === 'array' ? shadesArray : shadesObject, null, 2))

	const themeWithNewColor: CustomTheme = {
		...theme,
		colors: {
			...theme.colors,
			brand: shadesObject as ColorObj
		}
	}

	return (
		<Layout theme={themeWithNewColor} componentsHeader>
			{/* <Layout> */}
			{/* <Text fontSize='4xl'>{ntcjs.name(`#${color}`)[1]}</Text> */}
			<Shades originalColor={color} shades={shadesArray as string[]} />

			<Stack flexWrap='wrap' py={2} isInline justifyContent='space-between' py={8}>
				<Stack spacing={4} w='min(420px, 100%)' pb={8} alignItems={['center', 'center', 'flex-start']}>
					<Flex alignItems='flex-end' justifyContent='space-between'>
						<Box>
							<FormLabel htmlFor='format'>Select output format</FormLabel>
							<RadioGroup id='format' value={format} onChange={e => setFormat(e.target.value)} spacing={5} isInline>
								<Radio variantColor='brand' value='object'>
									Object
								</Radio>
								<Radio variantColor='brand' value='array'>
									Array
								</Radio>
							</RadioGroup>
						</Box>
					</Flex>

					<Text>Hue Factor: {hueFactor} </Text>
					<Slider color='brand' value={hueFactor} onChange={f => setHueFactor(f)} min={0} max={8}>
						<SliderTrack />
						<SliderFilledTrack />
						<SliderThumb />
					</Slider>
					<Text>Saturation Factor: {saturationFactor}</Text>
					<Slider color='brand' value={saturationFactor} onChange={f => setSaturationFactor(f)} min={0} max={24}>
						<SliderTrack />
						<SliderFilledTrack />
						<SliderThumb />
					</Slider>
				</Stack>
				<Stack spacing={8} w='min(420px, 100%)'>
					<Textarea value={JSON.stringify(format === 'array' ? shadesArray : shadesObject, null, 2)} minH='280px' />
					<Button variantColor='brand' onClick={onCopy}>
						{hasCopied ? 'Copied' : 'Copy'}
					</Button>
				</Stack>
			</Stack>
			<DemoComponents />
		</Layout>
	)
}

export default Components
