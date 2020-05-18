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
			<Flex justifyContent='space-between' align='center' bg='white' maxW='1280px' mx='auto '>
				<Flex alignItems='center'>
					{/* <Box width='100px' pr='4'>
					<GatsbyImage fluid={data.file.childImageSharp.fluid} />
				</Box> */}
					<Text color='gray.900' w='60px' textTransform='lowercase'>
						<GatsbyLink to='/'>{props.siteTitle}</GatsbyLink>
					</Text>
				</Flex>

				<Stack isInline spacing={[4, 8]}>
					<Link color='gray.900'>CLI package</Link>
					<Link color='brand.800' _hover={{ color: 'brand.900' }}>
						<IoLogoGithub size='25' />
					</Link>
				</Stack>
			</Flex>
		</Box>
	)
}

export default Header
