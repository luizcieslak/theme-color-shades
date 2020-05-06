import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Box, Flex } from 'rebass'
import GatsbyImage from 'gatsby-image'
import { GatsbyIconQuery } from '../generated/graphql'

const iconQuery = graphql`
	query GatsbyIcon {
		file(relativePath: { eq: "gatsby-icon.png" }) {
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

interface IProps {
	siteTitle: string
}

const Header: React.FunctionComponent<IProps> = props => {
	const data: GatsbyIconQuery = useStaticQuery(iconQuery)
	console.log('data icon header', data)
	return (
		<Box color='white' bg='primary' px='5' py='5'>
			<Flex alignItems='center'>
				<Box width='100px' pr='4'>
					<GatsbyImage fluid={data.file.childImageSharp.fluid} />
				</Box>
				<h1 style={{ margin: 0 }}>
					<Link to='/' style={{ color: `white`, textDecoration: `none` }}>
						{props.siteTitle}
					</Link>
				</h1>
			</Flex>
		</Box>
	)
}

export default Header
