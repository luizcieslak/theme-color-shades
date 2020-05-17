import React, { useState, useEffect } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import tinyColor from 'tinycolor2'
import { Box, Flex, Text, Input, Stack, SimpleGrid, Button, FormLabel, Icon, Link } from '@chakra-ui/core'
import shades, { ColorObj } from 'theme-color-shades'
import CardColorHex from '../components/ CardColorHex'
import Logo from '../components/Logo'
import customTheme, { CustomTheme } from '../theme'
import { navigate } from 'gatsby'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'
import SvgTerm from '../components/SvgTerm'

import { IoIosHeart } from 'react-icons/io'

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

const BoxWithGradient = styled(Box)`
	background: -moz-linear-gradient(45deg, ${props => props.theme.colors.brand['500']} 15%, ${props =>
	props.theme.colors.brand['700']} 33%, ${props => props.theme.colors.brand['900']} 74%, ${props =>
	props.theme.colors.brand['900']} 100%); /* ff3.6+ */
	background: -webkit-gradient(
		linear,
		left bottom,
		right top,
		color-stop(15%, ${props => props.theme.colors.brand['500']}),
		color-stop(33%, ${props => props.theme.colors.brand['700']}),
		color-stop(74%, ${props => props.theme.colors.brand['900']}),
		color-stop(100%, ${props => props.theme.colors.brand['900']})
	); /* safari4+,chrome */
	background: -webkit-linear-gradient(
		45deg,
		${props => props.theme.colors.brand['500']} 15%,
		${props => props.theme.colors.brand['700']} 33%,
		${props => props.theme.colors.brand['900']} 74%,
		${props => props.theme.colors.brand['900']} 100%
	); /* safari5.1+,chrome10+ */
	background: -o-linear-gradient(45deg, ${theme('brand.500')} 15%, ${props =>
	props.theme.colors.brand['700']} 33%, ${props => props.theme.colors.brand['900']} 74%, ${props =>
	props.theme.colors.brand['900']} 100%); /* opera 11.10+ */
	background: -ms-linear-gradient(45deg, ${props => props.theme.colors.brand['500']} 15%, ${props =>
	props.theme.colors.brand['700']} 33%, ${props => props.theme.colors.brand['900']} 74%, ${props =>
	props.theme.colors.brand['900']} 100%); /* ie10+ */
	background: linear-gradient(45deg, ${props => props.theme.colors.brand['500']} 15%, ${props =>
	props.theme.colors.brand['700']} 33%, ${props => props.theme.colors.brand['900']} 74%, ${props =>
	props.theme.colors.brand['900']} 100%); /* w3c */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${props =>
		props.theme.colors.brand['900']}', endColorstr='${theme('brand.500')}',GradientType=1 ); /* ie6-9 */
	color: ${props => props.theme.colors.brand['500']};
`

interface ColorObject {
	name: string
	originalColor: string
	method: tinyColor.Instance[]
}

const IndexPage: React.FC = () => {
	const [colorFromLogo, setColorFromLogo] = useState('')

	const [themeWithNewColor, setThemeWithNewColor] = useState<CustomTheme>(customTheme)

	useEffect(() => {
		if (colorFromLogo !== '') {
			const shadesObject = shades({ color: colorFromLogo, hue: true, saturation: true, outputFormat: 'object' })
			setThemeWithNewColor({
				...customTheme,
				colors: {
					...customTheme.colors,
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

			<Box>
				<BoxWithGradient pos='absolute' w='99.2vw' height='100%' zIndex='-10' />
				<Stack spacing={4} py={20}>
					<Text color='white' fontSize='6xl' textAlign='center'>
						You can also get them from the CLI
					</Text>
					{/* <Box w='50%'>
						<SvgTerm />
					</Box> */}
				</Stack>
			</Box>

			<Box>
				<Stack spacing={4} py={10}>
					<Text fontSize='6xl' textAlign='center' color='brand.900'>
						We
						<Box d='inline' as={IoIosHeart} color='brand.500' mx={2} />
						open source
					</Text>

					<Text textAlign='center' fontSize='xl' color='gray.800'>
						Please refer to the{' '}
						<Link
							color='brand.700'
							href='https://github.com/luizcieslak/theme-color-shades'
							rel='noopener'
							target='_blank'
						>
							GitHub repo
						</Link>{' '}
						to check the docs and to contribute to the project!
					</Text>
				</Stack>
			</Box>
		</Layout>
	)
}

export default IndexPage
