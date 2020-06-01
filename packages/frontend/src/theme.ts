import { theme as chakraTheme, DefaultTheme, ColorHues } from '@chakra-ui/core'

const theme = {
	...chakraTheme,
	// breakpoints: ['768px'],
	fonts: {
		body: 'Lato, sans-serif',
	},
	colors: {
		...chakraTheme.colors,
		brand: {
			'50': '#e7ecfe',
			'100': '#bac7f7',
			'200': '#94a4ea',
			'300': '#7b87d1',
			'400': '#5d68bb',
			'500': '#444ea2',
			'600': '#2e3684',
			'700': '#151b6b',
			'800': '#080b45',
			'900': '#010218',
			// ...chakraTheme.colors.gray
		},
	},
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
