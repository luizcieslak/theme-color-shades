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

	const currentPage = typeof window !== 'undefined' && window.location.pathname
	console.log(currentPage)
	return (
		<ThemeProvider theme={theme}>
			<CSSReset />
			<>
				{currentPage === '/components/' || currentPage === '/components' ? (
					<ComponentsHeader siteTitle={data.site?.siteMetadata?.title as string} />
				) : (
					<Header siteTitle={data.site?.siteMetadata?.title as string} />
				)}
				<Box as='main' mx='auto' maxW='1280px' py={20} px={2}>
					{children}
				</Box>
			</>
		</ThemeProvider>
	)
}

export default Layout
