import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { light } from '../theme'
import './layout.css'

import { Box } from 'rebass'
import Header from './header'
import { SiteQuery } from '../generated/graphql'

const pageQuery = graphql`
	query Site {
		site {
			siteMetadata {
				title
			}
		}
	}
`

const Layout: React.FunctionComponent = ({ children }) => {
	const data: SiteQuery = useStaticQuery(pageQuery)

	return (
		<ThemeProvider theme={light}>
			<>
				<Header siteTitle={data.site.siteMetadata.title} />
				<Box p='5'>
					{/* <h1>{data && data.}</h1> */}
					<div>
						<main>{children}</main>
					</div>
				</Box>
			</>
		</ThemeProvider>
	)
}

export default Layout
