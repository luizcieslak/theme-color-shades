import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme, { CustomTheme } from '../theme'
import './layout.css'
import '../globalFonts.css'

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

interface LayoutProps {
	theme?: CustomTheme
}

const Layout: React.FC<LayoutProps> = ({ children, theme = customTheme }) => {
	const data: SiteQuery = useStaticQuery(pageQuery)

	return (
		<ThemeProvider theme={theme}>
			<CSSReset />
			<>
				<Header siteTitle={data.site.siteMetadata.title} />
				<Box as='main' px={[2, 12]}>
					{children}
				</Box>
			</>
		</ThemeProvider>
	)
}

export default Layout
