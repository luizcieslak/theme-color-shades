import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/core'
import GatsbyImage from 'gatsby-image'
import { GatsbyIconQuery } from '../generated/graphql'

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
		<Box color='white' bg='white' px={[2, 12]} py={4} boxShadow='md'>
			<Flex alignItems='center'>
				{/* <Box width='100px' pr='4'>
					<GatsbyImage fluid={data.file.childImageSharp.fluid} />
				</Box> */}
				<Text color='brand.900' w='60px' textTransform='lowercase'>
					<Link to='/'>{props.siteTitle}</Link>
				</Text>
			</Flex>
		</Box>
	)
}

export default Header
