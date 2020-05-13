import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import tinyColor from 'tinycolor2'
import { Box, Flex, Text, Input } from '@chakra-ui/core'
import shades from 'theme-color-shades'
import CardColorHex from '../components/ CardColorHex'

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
	return (
		<Layout>
			<SEO keywords={[`gatsby`, `colors`, `react`]} />
			index
		</Layout>
	)
}

export default IndexPage
