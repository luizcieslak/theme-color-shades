import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Box, Flex, Text, Stack, Link } from '@chakra-ui/core'

import { IoLogoGithub } from 'react-icons/io'

import { LogoIconQuery } from '../generated/graphql'
import GatsbyImage from 'gatsby-image'

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
	console.log('data icon header', data)
	return (
		<Flex justifyContent='space-between' align='center' bg='white' px={[2, 12]} py={4} boxShadow='sm'>
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
				<Link color='brand.800' _hover={{ color: 'brand.900' }}>
					<IoLogoGithub size='25' />
				</Link>
			</Stack>
		</Flex>
	)
}

export default ComponentsHeader
