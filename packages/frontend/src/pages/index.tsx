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

import cliDemo from '../components/cliDemo.svg'
import cliDemoMobile from '../components/cliDemoMobile.svg'

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
	background: ${props => props.theme.colors.brand['600']};
	background: -moz-linear-gradient(0deg, ${props => props.theme.colors.brand['600']} 0%, ${props =>
	props.theme.colors.brand['700']} 100%);
	background: -webkit-linear-gradient(0deg, ${props => props.theme.colors.brand['600']} 0%, ${props =>
	props.theme.colors.brand['700']} 100%);
	background: linear-gradient(0deg, ${props => props.theme.colors.brand['600']} 0%, ${props =>
	props.theme.colors.brand['700']} 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="${props =>
		props.theme.colors.brand['600']}",endColorstr="${props =>
	props.theme.colors.brand['700']}",GradientType=1); /* ie6-9 */
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
			<SimpleGrid columns={2} spacing={10} minChildWidth={['300px', '400px']} pb={[10, 20]}>
				<Flex justifyContent={['center', 'center', 'center', 'flex-start']}>
					<Box w={['250px', '300px', '400px']}>
						<Logo setColor={setColorFromLogo} />
					</Box>
				</Flex>

				<Stack spacing={2}>
					<Text color='brand.900' fontSize={['2xl', '4xl', '5xl']}>
						Generate a set of shades ready to be used in your UI library.
					</Text>

					<Stack isInline spacing={4} flexWrap='wrap' alignItems='baseline'>
						<FormLabel htmlFor='color' pb={0} fontSize='xl'>
							Try it out:
						</FormLabel>
						<Input placeholder='type an HEX color' defaultValue={colorFromLogo} w='50%' />
						<Button variantColor='brand' onClick={() => navigate(`components?color=${colorFromLogo.split('#')[1]}`)}>
							Go!
						</Button>
					</Stack>
				</Stack>
			</SimpleGrid>

			<Box minH='750px'>
				<BoxWithGradient pos='absolute' w='100vw' minH='750px' left={0} zIndex={-1} />
				<Stack spacing={4} py={10}>
					<Text color='white' fontSize={['4xl', '5xl', '5xl']} textAlign='center'>
						You can also get them from the CLI
					</Text>
					{/* <Box w='50%'>
						<SvgTerm />
					</Box> */}
					<Flex justifyContent='center'>
						{typeof window !== 'undefined' && window.innerWidth >= 768 ? (
							<Box as={'object'} type='image/svg+xml' data={cliDemo} border='1px' borderRadius='10px'>
								CLI demo
							</Box>
						) : (
							<Box as={'object'} type='image/svg+xml' data={cliDemoMobile} border='1px' borderRadius='10px'>
								CLI demo
							</Box>
						)}
					</Flex>
				</Stack>
			</Box>

			<Box>
				<Stack spacing={12} py={10}>
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
