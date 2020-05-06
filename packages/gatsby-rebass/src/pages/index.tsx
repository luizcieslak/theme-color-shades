import { Link, graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GatsbyImage from 'gatsby-image'
import { Box } from 'rebass'
import { GatsbyAstronautQuery } from '../generated/graphql'

import { FaBeer } from 'react-icons/fa'

interface IProps {
	data: GatsbyAstronautQuery
}

const IndexPage: React.FC<IProps> = ({ data }) => {
	console.log('oba', data.file.childImageSharp.fluid)
	return (
		<Layout>
			<SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
			<Box width='30%'>
				{/* TODO: add optional chaining in file */}

				<FaBeer />
				<GatsbyImage fluid={data.file.childImageSharp.fluid} />
			</Box>
			<Link to='/page-2'>go to page 2</Link>
		</Layout>
	)
}

export const pageQuery = graphql`
	query GatsbyAstronaut {
		file(relativePath: { eq: "gatsby-astronaut.png" }) {
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

export default IndexPage
