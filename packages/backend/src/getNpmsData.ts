import fetch from 'isomorphic-unfetch'

const npmsUrlPrefix = 'https://api.npms.io/v2/package'

const getNpmsData = async (packageName: string) => {
	console.log('fetching', `${npmsUrlPrefix}/${encodeURIComponent(packageName)}`)
	const response = await fetch(`${npmsUrlPrefix}/${encodeURIComponent(packageName)}`)
	return (await response.json()) as NpmsResponse
}

export default getNpmsData

interface Publisher {
	username: string
	email: string
}

interface Maintainer {
	username: string
	email: string
}

interface Repository {
	type: string
	url: string
	directory: string
}

interface Links {
	npm: string
	homepage: string
	repository: string
	bugs: string
}

interface Dependencies {
	'loose-envify': string
	'object-assign': string
	'prop-types': string
}

interface Release {
	from: Date
	to: Date
	count: number
}

interface Metadata {
	name: string
	scope: string
	version: string
	description: string
	keywords: string[]
	date: Date
	publisher: Publisher
	maintainers: Maintainer[]
	repository: Repository
	links: Links
	license: string
	dependencies: Dependencies
	releases: Release[]
	hasSelectiveFiles: boolean
}

interface Download {
	from: Date
	to: Date
	count: number
}

interface Npm {
	downloads: Download[]
	dependentsCount: number
	starsCount: number
}

interface Distribution {
	3600: number
	10800: number
	32400: number
	97200: number
	291600: number
	874800: number
	2624400: number
	7873200: number
	23619600: number
	70858800: number
	212576400: number
}

interface Issues {
	count: number
	openCount: number
	distribution: Distribution
	isDisabled: boolean
}

interface Contributor {
	username: string
	commitsCount: number
}

interface Commit {
	from: Date
	to: Date
	count: number
}

interface Status {
	context: string
	state: string
}

interface Github {
	homepage: string
	starsCount: number
	forksCount: number
	subscribersCount: number
	issues: Issues
	contributors: Contributor[]
	commits: Commit[]
	statuses: Status[]
}

interface Files {
	readmeSize: number
	testsSize: number
	hasChangelog: boolean
}

interface Source {
	files: Files
	linters: string[]
	coverage: number
}

interface Collected {
	metadata: Metadata
	npm: Npm
	github: Github
	source: Source
}

interface Quality {
	carefulness: number
	tests: number
	health: number
	branding: number
}

interface Popularity {
	communityInterest: number
	downloadsCount: number
	downloadsAcceleration: number
	dependentsCount: number
}

interface Maintenance {
	releasesFrequency: number
	commitsFrequency: number
	openIssues: number
	issuesDistribution: number
}

interface Evaluation {
	quality: Quality
	popularity: Popularity
	maintenance: Maintenance
}

interface Detail {
	quality: number
	popularity: number
	maintenance: number
}

interface Score {
	final: number
	detail: Detail
}

export interface NpmsResponse {
	analyzedAt: Date
	collected: Collected
	evaluation: Evaluation
	score: Score
}
