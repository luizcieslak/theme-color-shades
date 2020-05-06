import { theme as chakraTheme, DefaultTheme, ColorHues } from '@chakra-ui/core'

const theme = {
	...chakraTheme
	// breakpoints: ['768px'],
	// fonts: {
	// 	body: 'Roboto, sans-serif',
	// 	heading: 'Poppins, serif',
	// 	mono: 'Poppins, monospace'
	// },
	// colors: {
	// 	...theme.colors,
	// 	brand: {
	// 		50: '#dbfaff',
	// 		100: '#b2ebfd',
	// 		200: '#86dbf7',
	// 		300: '#7ac8e1',
	// 		400: '#6eb4cb',
	// 		500: '#59ccf2',
	// 		600: '#31bfee',
	// 		700: '#1ca5d4',
	// 		800: '#0d80a6',
	// 		900: '#005c77'
	// 	},
	// 	red: {
	// 		50: '#fda5a5',
	// 		100: '#fd9696',
	// 		200: '#fc8787',
	// 		300: '#fc7878',
	// 		400: '#fc6969',
	// 		500: '#FC5A5A',
	// 		600: '#e65252',
	// 		700: '#cf4a4a',
	// 		800: '#b84242',
	// 		900: '#a13a3a'
	// 	},
	// 	green: {
	// 		50: '#b8efd9',
	// 		100: '#95e8c6',
	// 		200: '#71e0b4',
	// 		300: '#60dcaa',
	// 		400: '#4ed8a1',
	// 		500: '#3dd598',
	// 		600: '#38c28b',
	// 		700: '#32af7d',
	// 		800: '#2d9b6f',
	// 		900: '#278861'
	// 	},
	// 	gray: {
	// 		...theme.colors.gray,
	// 		'100': '#FAFAFB', // fundo
	// 		'200': '#F1F1F5',
	// 		'300': '#e2e2ea', // borda da box principal
	// 		'400': '#D5D5DC',
	// 		'500': '#B5B5BE',
	// 		// '500': '#C4C4C4', //inicio do contrato
	// 		'600': '#92929D', //
	// 		'700': '#696974', // contratos disponiveis - subtitle
	// 		'800': '#44444f', // dd/mm/yyyy
	// 		'900': '#171725'
	// 	},
	// 	yellow: {
	// 		...theme.colors.yellow,
	// 		100: '#FFF4EC',
	// 		200: '#FFE4CE',
	// 		300: '#FFD4B1',
	// 		400: '#FFB377',
	// 		500: '#FF933C',
	// 		600: '#E68436',
	// 		700: '#995824',
	// 		800: '#73421B',
	// 		900: '#4D2C12'
	// 	}
	// }
}

// copy from @types, not exported
// interface Colors {
// 	transparent: string
// 	current: string
// 	black: string
// 	white: string
// 	whiteAlpha: ColorHues
// 	blackAlpha: ColorHues
// 	gray: ColorHues
// 	red: ColorHues
// 	orange: ColorHues
// 	yellow: ColorHues
// 	green: ColorHues
// 	teal: ColorHues
// 	blue: ColorHues
// 	cyan: ColorHues
// 	purple: ColorHues
// 	pink: ColorHues
// 	linkedin: ColorHues
// 	facebook: ColorHues
// 	messenger: ColorHues
// 	whatsapp: ColorHues
// 	twitter: ColorHues
// 	telegram: ColorHues
// }

// interface CustomColors extends Colors {
// 	// put your custom colors here, if you want to use the theme in a useTheme<CustomTheme>() hook.
// 	brand: ColorHues
// }

// export interface CustomTheme extends DefaultTheme {
// 	colors: CustomColors
// }

export default theme
