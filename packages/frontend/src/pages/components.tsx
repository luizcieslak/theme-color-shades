import React from 'react'
import qs from 'query-string'
import tinyColor from 'tinycolor2'

import Layout from '../components/layout'
import shades, { ColorObj } from 'theme-color-shades'
import Shades from '../components/Shades'
import DemoComponents from '../components/DemoComponents'

const Components = () => {
	let color = '#06D6A0' //default

	if (typeof window !== 'undefined') {
		const query = qs.parse(window.location.search)

		if ('color' in query) {
			color = query.color as string
		}
	}

	const shadesTinyColor = shades({ color, hue: true, saturation: true })
	const shadesArray = shades({ color, hue: true, saturation: true, outputFormat: 'array' })
	const shadesObject = shades({ color, hue: true, saturation: true, outputFormat: 'object' })

	return (
		<Layout>
			<Shades originalColor={color} shades={shadesTinyColor as tinyColor.Instance[]} />
			<DemoComponents colorObj={shadesObject as ColorObj} />
		</Layout>
	)
}

export default Components
