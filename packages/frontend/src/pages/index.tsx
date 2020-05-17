import React, { useState, useEffect } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import tinyColor from 'tinycolor2'
import { Box, Flex, Text, Input, Stack, SimpleGrid, Button, FormLabel } from '@chakra-ui/core'
import shades, { ColorObj } from 'theme-color-shades'
import CardColorHex from '../components/ CardColorHex'
import Logo from '../components/Logo'
import theme, { CustomTheme } from '../theme'
import { navigate } from 'gatsby'

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

	const [themeWithNewColor, setThemeWithNewColor] = useState<CustomTheme>(theme)

	useEffect(() => {
		if (colorFromLogo !== '') {
			const shadesObject = shades({ color: colorFromLogo, hue: true, saturation: true, outputFormat: 'object' })
			setThemeWithNewColor({
				...theme,
				colors: {
					...theme.colors,
					brand: shadesObject as ColorObj
				}
			})
		}
	}, [colorFromLogo])

	console.log('color', colorFromLogo)
	return (
		<Layout theme={themeWithNewColor}>
			{/* <Layout> */}
			<SEO keywords={[`gatsby`, `colors`, `react`]} />
			<SimpleGrid columns={2} spacing={10} minChildWidth={['300px', '400px']}>
				<Box maxW={['300px', '400px']}>
					<Logo setColor={setColorFromLogo} />
				</Box>
				<Stack spacing={2}>
					<Text color='brand.900' fontSize={['2xl', '4xl', '5xl']}>
						Generate a group of color shades ready to be used in your UI library.
					</Text>
					<FormLabel htmlFor='color' fontSize='xl'>
						Try it out:
					</FormLabel>
					<Stack isInline spacing={4}>
						<Input placeholder='an HEX color' defaultValue={colorFromLogo} w='50%' />
						<Button variantColor='brand' onClick={() => navigate(`components?color=${colorFromLogo.split('#')[1]}`)}>
							Go!
						</Button>
					</Stack>
				</Stack>
			</SimpleGrid>
		</Layout>
	)
}

export default IndexPage
