import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Box, Flex, Text, Stack, Link } from '@chakra-ui/core'
import GatsbyImage from 'gatsby-image'
import { GatsbyIconQuery } from '../generated/graphql'

import { IoLogoGithub } from 'react-icons/io'

// const iconQuery = graphql`
// 	query GatsbyIcon {
// 		file(relativePath: { eq: "gatsby-icon.png" }) {
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

interface HeaderProps {
	siteTitle: string
}

const Header: React.FunctionComponent<HeaderProps> = props => {
	// const data: GatsbyIconQuery = useStaticQuery(iconQuery)
	// console.log('data icon header', data)
	return (
		<Box py={4} boxShadow='sm' px={4}>
			<Flex justifyContent='space-between' align='center' bg='white' maxW='1024px' mx='auto' px={[4, 4, 4, 0]}>
				<Flex alignItems='center'>
					{/* <Box width='100px' pr='4'>
					<GatsbyImage fluid={data.file.childImageSharp.fluid} />
				</Box> */}
					<Text color='gray.900' w='60px' textTransform='lowercase'>
						<GatsbyLink to='/'>{props.siteTitle}</GatsbyLink>
					</Text>
				</Flex>

				<Stack isInline spacing={[4, 8]} alignItems='center'>
					<Link color='gray.900'>CLI package</Link>
					<Link
						color='brand.600'
						_hover={{ color: 'brand.900' }}
						href='https://github.com/luizcieslak/theme-color-shades'
						rel='noopener'
						target='_blank'
					>
						<IoLogoGithub size='30' />
					</Link>
				</Stack>
			</Flex>
		</Box>
	)
}

export default Header
