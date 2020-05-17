import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Box, Flex, Text, Stack, Link, useTheme } from '@chakra-ui/core'

import { IoLogoGithub } from 'react-icons/io'

import { LogoIconQuery } from '../generated/graphql'
import GatsbyImage from 'gatsby-image'
import Shades from './Shades'
import ShadesStripeHeader from './ShadesStripeHeader'
import { CustomTheme } from '../theme'

interface HeaderProps {
	siteTitle: string
}

const iconQuery = graphql`
	query LogoIcon {
		file(relativePath: { eq: "logo.png" }) {
			childImageSharp {
				fluid {
					base64
					tracedSVG
					aspectRatio
					src
					srcSet
					srcWebp
					srcSetWebp
					sizes
					originalImg
					originalName
					presentationWidth
					presentationHeight
				}
			}
		}
	}
`
const ComponentsHeader: React.FunctionComponent<HeaderProps> = props => {
	const data: LogoIconQuery = useStaticQuery(iconQuery)

	const theme = useTheme() as CustomTheme

	// Listen to page scroll, show shades stripe when scrolled
	const [pageYOffset, setPageYOffset] = React.useState(0)
	const scrollPage = () => {
		if (typeof window !== 'undefined') {
			setPageYOffset(window.pageYOffset)
			window.removeEventListener('scroll', scrollPage)
		}
	}
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', scrollPage, { passive: true })
		}
		return () => window.removeEventListener('scroll', scrollPage)
	}, [pageYOffset])

	return (
		<Flex
			pos='fixed'
			w='100vw'
			top='0'
			zIndex={2}
			justifyContent='space-between'
			align='center'
			bg='white'
			px={[2, 12]}
			py={4}
			boxShadow='sm'
		>
			<GatsbyLink to='/'>
				<Flex alignItems='center'>
					<Box width='40px' pr='4'>
						<GatsbyImage fluid={data.file.childImageSharp.fluid} />
					</Box>
					<Text d='inline-block' color='gray.900' textTransform='lowercase'>
						{props.siteTitle}
					</Text>
				</Flex>
			</GatsbyLink>

			<Stack isInline spacing={[4, 8]}>
				{pageYOffset > 228 ? (
					<ShadesStripeHeader shades={Object.values(theme.colors.brand)} />
				) : (
					<Link color='brand.800' _hover={{ color: 'brand.900' }}>
						<IoLogoGithub size='25' />
					</Link>
				)}
			</Stack>
		</Flex>
	)
}

export default ComponentsHeader
