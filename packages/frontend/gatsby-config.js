const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)
require('dotenv').config({
	path: `.env.${activeEnv}`,
	// debug: true
})

const { ACKEE_DOMAIN, ACKEE_SERVER } = process.env
console.log(ACKEE_DOMAIN, ACKEE_SERVER)

module.exports = {
	siteMetadata: {
		title: `theme color shades`,
		description: `Generate a group of color shades ready to be used in your UI library.`,
		author: `@luizcieslak`,
		siteUrl: 'https://themecolorshades.com',
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-react-helmet`,
		// uncomment this to see the webpack bundle analyzer
		// `gatsby-plugin-webpack-bundle-analyzer`,
		// see: https://henrique.codes/speed-up-gatsby-site/
		// commenting preact plugin here, does not work with react hot loading
		// see: https://github.com/gatsbyjs/gatsby/issues/23339
		// Alternatively, you can use a ternary operator to add another plugin in development, e.g.
		// NODE_ENV === 'production' ? `gatsby-plugin-preact` : `gatsby-plugin-webpack-bundle-analyzer`,
		// `gatsby-plugin-preact`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `theme color shades`,
				short_name: `tcs`,
				start_url: `/`,
				background_color: `#0dd8a4`,
				theme_color: `#0dd8a4`,
				display: `minimal-ui`,
				icon: `src/images/logo.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-plugin-sitemap',
			options: {
				output: '/sitemap.xml',
				exclude: ['/debug'],
				query: `
		      {
		        site {
		          siteMetadata {
		            siteUrl
		          }
		        }

		        allSitePage {
		          edges {
		            node {
		              path
		            }
		          }
		        }
		    }`,
				serialize: ({ site, allSitePage }) =>
					allSitePage.edges.map(edge => ({
						url: site.siteMetadata.siteUrl + edge.node.path,
						changefreq: 'daily',
						priority: 0.7,
					})),
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				resolveEnv: () => process.env.NODE_ENV,
				env: {
					production: {
						// TODO: DEPLOY - erase this line and dis-comment the other on the first deploy
						// policy: [{ userAgent: '*', disallow: ['/'] }]
						policy: [
							{
								userAgent: '*',
								disallow: [''],
							},
							{ userAgent: 'Twitterbot', disallow: [''] },
							{ userAgent: '*' },
						],
					},
					'branch-deploy': {
						policy: [{ userAgent: '*', disallow: ['/'] }],
						sitemap: null,
						host: null,
					},
					'deploy-preview': {
						policy: [{ userAgent: '*', disallow: ['/'] }],
						sitemap: null,
						host: null,
					},
				},
			},
		},
		{
			resolve: 'gatsby-plugin-netlify',
			options: {
				headers: {
					// Headers de segurança abaixo, vale a validação dps
					// '/*': [
					// 	'X-Frame-Options: sameorigin',
					// 	'X-XSS-Protection: 0',
					// 	'X-Content-Type-Options: nosniff',
					// 	`Expect-CT: max-age=86400, enforce, report-uri='https://url.para/report'`,
					// 	'Access-Control-Allow-Origin: *',
					// 	`Feature-Policy: geolocation 'none'`,
					// ],
				}, // option to add more headers. `Link` headers are transformed by the below criteria
				allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: true, // boolean to turn off the default caching headers
				// transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
				generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
			},
		},
		{
			resolve: 'gatsby-plugin-ackee-tracker',
			options: {
				domainId: ACKEE_DOMAIN,
				server: ACKEE_SERVER,
				// ignoreLocalhost: false,
				detailed: true,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
}
