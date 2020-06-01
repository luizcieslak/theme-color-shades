import React, { useState, useEffect } from 'react'

import { navigate } from 'gatsby'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'
import { Box, Flex, Text, Input, Stack, SimpleGrid, Button, FormLabel, Icon, Link, Image, Code } from '@chakra-ui/core'

import shades, { ColorObj } from '@theme-color-shades/core'

import Logo from '../components/Logo'
import customTheme, { CustomTheme } from '../theme'
import Layout from '../components/layout'
import SEO from '../components/seo'

import cliDemo from '../images/cli.svg'

import { IoIosHeart } from 'react-icons/io'

const BoxWithGradient = styled(Box)`
	background: linear-gradient(267.9deg, ${theme('colors.brand.600')} -1.96%, ${theme('colors.brand.500')} 101.04%);
`

const IndexPage: React.FC = () => {
	const [colorFromLogo, setColorFromLogo] = useState('')

	const [themeWithNewColor, setThemeWithNewColor] = useState<CustomTheme>(customTheme)

	useEffect(() => {
		if (colorFromLogo !== '') {
			const shadesObject = shades({
				color: colorFromLogo,
				hue: true,
				saturation: true,
				outputFormat: 'object',
			})
			setThemeWithNewColor({
				...customTheme,
				colors: {
					...customTheme.colors,
					brand: shadesObject as ColorObj,
				},
			})
		}
	}, [colorFromLogo])

	return (
		<Layout theme={themeWithNewColor}>
			{/* <Layout> */}
			<SEO keywords={[`gatsby`, `colors`, `react`]} />
			<SimpleGrid columns={2} spacing={10} minChildWidth={['300px', '400px']} pt={12} pb={[10, 32]}>
				<Flex justifyContent={['center', 'center', 'center', 'flex-start']}>
					<Box w={['250px', '300px', '400px']}>
						<Logo setColor={setColorFromLogo} />
					</Box>
				</Flex>

				<Stack spacing={8}>
					<Text color='brand.900' fontSize={['2xl', '4xl', '5xl']}>
						Generate a set of shades ready to be used in your UI library.
					</Text>

					<Stack isInline spacing={[2, 4]} alignItems='baseline' justifyContent={['space-between', 'flex-start']}>
						<Text fontSize='xl'>Try it out:</Text>
						<Input placeholder='type an HEX color' defaultValue={colorFromLogo} maxW='50%' />
						<Button variantColor='brand' onClick={() => navigate(`components?color=${colorFromLogo.split('#')[1]}`)}>
							Go!
						</Button>
					</Stack>
				</Stack>
			</SimpleGrid>

			<Box minH='700px'>
				<BoxWithGradient pos='absolute' w='99vw' minH='700px' left={0} zIndex={-1} />
				<Stack spacing={12} py={12}>
					<Box>
						<Text color='white' fontSize={['4xl', '5xl', '5xl']} textAlign='center' lineHeight='2em'>
							You can also get them from the CLI!
						</Text>
						<Text color='white' textAlign='center'>
							Just run &nbsp; <Code>npx theme-color-shades HEX_COLOR</Code> &nbsp; from anywhere.
						</Text>
					</Box>
					<Flex justifyContent='center'>
						<Image src={cliDemo} maxW='100%' h={['350px', '350px', '400px']} />
					</Flex>
				</Stack>
			</Box>

			<Box>
				<Stack spacing={12} py={20}>
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
