import URL from 'url'

export interface ParseUrlResponse {
	url: URL.UrlWithStringQuery
	type: 'NPM' | 'GITHUB'
}

const parseUrl = (url: string): ParseUrlResponse => {
	if (!url) {
		throw new Error('Please provide a url parameter.')
	}
	const parsed = URL.parse(url)

	let type
	if (parsed.hostname?.includes('npmjs')) {
		type = 'NPM'
	} else if (parsed.hostname?.includes('github')) {
		type = 'GITHUB'
	} else {
		throw new Error('URL is neither from NPM nor GitHub.')
	}

	return {
		url: parsed,
		type
	}
}

export default parseUrl
