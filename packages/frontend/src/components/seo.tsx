import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

const buildMeta = ({
	meta,
	metaDescription,
	title,
	author,
	keywords
}: {
	meta: []
	metaDescription: string
	title: string
	author: string
	keywords: string[]
}) =>
	[
		{
			content: metaDescription,
			name: `description`
		},
		{
			content: title,
			property: `og:title`
		},
		{
			content: metaDescription,
			property: `og:description`
		},
		{
			content: `website`,
			property: `og:type`
		},
		{
			content: `summary`,
			name: `twitter:card`
		},
		{
			content: author,
			name: `twitter:creator`
		},
		{
			content: title,
			name: `twitter:title`
		},
		{
			content: metaDescription,
			name: `twitter:description`
		}
	]
		.concat(
			keywords.length > 0
				? {
						content: keywords.join(`, `),
						name: `keywords`
				  }
				: []
		)
		.concat(meta)

const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`
interface IProps {
	description?: string
	lang: string
	meta: []
	keywords: string[]
	title: string
}

function SEO({ description, lang, meta, keywords, title }: IProps) {
	const data = useStaticQuery(detailsQuery)
	const metaDescription = description || data.site.siteMetadata.description
	const builtMeta = buildMeta({
		author: data.site.siteMetadata.author,
		keywords,
		meta,
		metaDescription,
		title
	})

	return (
		<Helmet
			htmlAttributes={{ lang }}
			title={title}
			titleTemplate={`%s | ${data.site.siteMetadata.title}`}
			meta={builtMeta}
		/>
	)
}

SEO.defaultProps = {
	keywords: [],
	lang: `en`,
	meta: []
}

export default SEO
