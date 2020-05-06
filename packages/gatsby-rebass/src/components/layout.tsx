import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from '../theme'
import './layout.css'

import { Box } from '@chakra-ui/core'
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
		<ThemeProvider theme={theme}>
			<CSSReset />
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
