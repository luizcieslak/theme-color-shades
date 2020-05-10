import React from 'react'
import qs from 'query-string'
import tinyColor from 'tinycolor2'

import Layout from '../components/layout'
import shades from 'theme-color-shades'
import Shades from '../components/Shades'

const Components = () => {
	let color = '#06D6A0' //default

	if (typeof window !== 'undefined') {
		const query = qs.parse(window.location.search)

		if ('color' in query) {
			color = query.color as string
		}
	}

	const shadesArray = shades({ color, hue: true, saturation: true })

	return (
		<Layout>
			<Shades originalColor={color} shades={shadesArray as tinyColor.Instance[]} />
		</Layout>
	)
}

export default Components
