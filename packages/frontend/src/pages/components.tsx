import React, { useState } from 'react'
import qs from 'query-string'
import tinyColor from 'tinycolor2'

import Layout from '../components/layout'
import shades, { ColorObj } from 'theme-color-shades'
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
	Flex,
	Stack,
	Box,
	Text,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb
} from '@chakra-ui/core'

const Components = () => {
	const [format, setFormat] = useState<string>('object')

	const [hueFactor, setHueFactor] = useState(2)
	const [saturationFactor, setSaturationFactor] = useState(12)

	let color = '#06D6A0' //default

	if (typeof window !== 'undefined') {
		const query = qs.parse(window.location.search)

		if ('color' in query) {
			color = query.color as string
		}
	}

	const shadesTinyColor = shades({ color, hue: { factor: hueFactor }, saturation: { factor: saturationFactor } })
	const shadesArray = shades({
		color,
		hue: { factor: hueFactor },
		saturation: { factor: saturationFactor },
		outputFormat: 'array'
	})
	const shadesObject = shades({
		color,
		hue: { factor: hueFactor },
		saturation: { factor: saturationFactor },
		outputFormat: 'object'
	})

	const { onCopy, hasCopied } = useClipboard(JSON.stringify(format === 'array' ? shadesArray : shadesObject, null, 2))

	const themeWithNewColor: CustomTheme = {
		...theme,
		colors: {
			...theme.colors,
			brand: shadesObject as ColorObj
		}
	}

	return (
		<Layout theme={themeWithNewColor}>
			{/* <Layout> */}
			{/* <Text fontSize='4xl'>{ntcjs.name(`#${color}`)[1]}</Text> */}
			<Shades originalColor={color} shades={shadesTinyColor as tinyColor.Instance[]} />

			<Stack flexWrap='wrap' py={2} isInline spacing={16}>
				<Stack spacing={4}>
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
					<Button variantColor='brand' onClick={onCopy}>
						{hasCopied ? 'Copied' : 'Copy'}
					</Button>
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
				<Textarea
					value={JSON.stringify(format === 'array' ? shadesArray : shadesObject, null, 2)}
					minH='280px'
					maxW='250px'
				/>
			</Stack>
			<DemoComponents />
		</Layout>
	)
}

export default Components
