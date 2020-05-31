import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme, { CustomTheme } from '../theme'
import './layout.css'
import '../globalFonts.css'

import { Box } from '@chakra-ui/core'
import Header from './header'
import ComponentsHeader from './ComponentsHeader'
import { SiteQuery } from '../generated/graphql'
import Footer from './Footer'

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

	// TODO: this causes a flick in header when in components/
	const currentPage = typeof window !== 'undefined' && window.location.pathname
	return (
		<ThemeProvider theme={theme}>
			<CSSReset />
			<>
				{currentPage === '/components/' || currentPage === '/components' ? (
					<ComponentsHeader siteTitle={data.site?.siteMetadata?.title as string} />
				) : (
					<Header siteTitle={data.site?.siteMetadata?.title as string} />
				)}
				<Box as='main' mx='auto' maxW='1024px' py={20} px={[4, 4, 4, 0]}>
					{children}
				</Box>
			</>
			<Footer />
		</ThemeProvider>
	)
}

export default Layout
