import { Link, graphql } from 'gatsby'
import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GatsbyImage from 'gatsby-image'
import { GatsbyAstronautQuery } from '../generated/graphql'

import { FaBeer } from 'react-icons/fa'

import tinyColor from 'tinycolor2'
import { Box, Flex, Text, Input } from '@chakra-ui/core'
// TODO: this should be a standard library import. Don't create a @types/ inside frontend
// import shades from 'theme-color-shades/lib/src'
import shades, { sum } from 'theme-color-shades'

// interface IProps {
// 	data: GatsbyAstronautQuery
// }

// const IndexPage: React.FC<IProps> = ({ data }) => {
// 	return (
// 		<Layout>
// 			<SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
// 			<Box width='30%'>
// 				{/* TODO: add optional chaining in file */}

// 				<FaBeer />
// 				<GatsbyImage fluid={data.file.childImageSharp.fluid} />
// 			</Box>
// 			<Link to='/page-2'>go to page 2</Link>
// 		</Layout>
// 	)
// }

// export const pageQuery = graphql`
// 	query GatsbyAstronaut {
// 		file(relativePath: { eq: "gatsby-astronaut.png" }) {
// 			childImageSharp {
// 				fluid {
// 					base64
// 					tracedSVG
// 					aspectRatio
// 					src
// 					srcSet
// 					srcWebp
// 					srcSetWebp
// 					sizes
// 					originalImg
// 					originalName
// 					presentationWidth
// 					presentationHeight
// 				}
// 			}
// 		}
// 	}
// `

interface ColorObject {
	name: string
	originalColor: string
	method: tinyColor.Instance[]
}

interface CardColorProps {
	hex: string
	index?: number
	name?: string
}

function CardColorHex({ hex, index, name }: CardColorProps) {
	// console.log('tsdx', sum(1, 2))
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

const IndexPage: React.FC = () => {
	const [inputColor, setInputColor] = useState('d31233')
	const colorObjectInput: ColorObject = {
		name: 'color from input',
		originalColor: `#${inputColor}`,
		method: shades({ color: `#${inputColor}`, hue: true, saturation: true })
	}

	const colorsArray: Array<ColorObject> = [
		{
			name: 'purple',
			originalColor: '#3e2f5b',
			method: shades({ color: `#3e2f5b`, hue: true, saturation: true })
		},

		{
			name: 'blueGIS',
			originalColor: '#59ccf2',
			method: shades({ color: `#59ccf2`, hue: true, saturation: true })
		},
		{
			name: 'redGIS',
			originalColor: '#FC5A5A',
			method: shades({ color: `#FC5A5A`, hue: true, saturation: true })
		},
		{
			name: 'brightYellow',
			originalColor: '#fce15a',
			method: shades({ color: `#fce15a`, hue: true, saturation: true })
		},
		{
			name: 'greenGIS',
			originalColor: '#3dd598',
			method: shades({ color: `#3dd598`, hue: true, saturation: true })
		},
		{
			name: 'grayGIS',
			originalColor: '#B5B5BE',
			method: shades({ color: `#B5B5BE`, hue: true, saturation: true })
		},
		{
			name: 'yellowGIS',
			originalColor: '#FF933C',
			method: shades({ color: `#FF933C`, hue: true, saturation: true })
		},
		{
			name: 'darkJungleGreen',
			originalColor: '#000F08',
			method: shades({ color: `#000F08`, hue: true, saturation: true })
		}
	]

	return (
		<Layout>
			<SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
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

export default IndexPage
