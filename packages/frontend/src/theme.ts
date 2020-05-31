import { theme as chakraTheme, DefaultTheme, ColorHues } from '@chakra-ui/core'

const theme = {
	...chakraTheme,
	// breakpoints: ['768px'],
	fonts: {
		body: 'Lato, sans-serif'
	},
	colors: {
		...chakraTheme.colors,
		brand: {
			'50': '#e5fffb',
			'100': '#b3fff2',
			'200': '#80ffe5',
			'300': '#54f7d2',
			'400': '#27f2bd',
			'500': '#0dd8a4',
			'600': '#08ab7c',
			'700': '#007f57',
			'800': '#004d32',
			'900': '#001a10'
			// ...chakraTheme.colors.gray
		}
	}
}

// copy from @types, not exported
interface Colors {
	transparent: string
	current: string
	black: string
	white: string
	whiteAlpha: ColorHues
	blackAlpha: ColorHues
	gray: ColorHues
	red: ColorHues
	orange: ColorHues
	yellow: ColorHues
	green: ColorHues
	teal: ColorHues
	blue: ColorHues
	cyan: ColorHues
	purple: ColorHues
	pink: ColorHues
	linkedin: ColorHues
	facebook: ColorHues
	messenger: ColorHues
	whatsapp: ColorHues
	twitter: ColorHues
	telegram: ColorHues
}

interface CustomColors extends Colors {
	// put your custom colors here, if you want to use the theme in a useTheme<CustomTheme>() hook.
	brand: ColorHues
}

export interface CustomTheme extends DefaultTheme {
	colors: CustomColors
}

export default theme
