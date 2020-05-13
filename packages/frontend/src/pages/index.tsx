import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import tinyColor from 'tinycolor2'
import { Box, Flex, Text, Input } from '@chakra-ui/core'
import shades, { ColorObj } from 'theme-color-shades'
import CardColorHex from '../components/ CardColorHex'
import Logo from './Logo'
import theme, { CustomTheme } from '../theme'

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

const IndexPage: React.FC = () => {
	const [colorFromLogo, setColorFromLogo] = useState('')

	const shadesObject = shades({ color: colorFromLogo, hue: true, saturation: true, outputFormat: 'object' })

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
			<SEO keywords={[`gatsby`, `colors`, `react`]} />
			index
			<Box w='300px'>
				<Logo setColor={setColorFromLogo} />
			</Box>
			<Text color='brand.500'>Generate a group of color shades ready to be used in your UI library.</Text>
		</Layout>
	)
}

export default IndexPage
