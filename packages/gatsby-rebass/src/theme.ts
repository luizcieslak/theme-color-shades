/**
 * THEME VALUES
 */
const colors = {
	blue: '#07c',
	lightgray: '#f6f6ff'
}

const fontFamily = {
	menlo: 'Menlo, monospace',
	system: 'system-ui, sans-serif'
}

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]

const shadows = {
	large: '0 0 24px rgba(0, 0, 0, .125)',
	small: '0 0 4px rgba(0, 0, 0, .125)'
}

const space = [0, 4, 8, 16, 32, 64, 128, 256]

/**
 * THEME INTERFACE
 */
export type color = 'primary' | 'secondary'
export type font = 'mono' | 'sans'
export type shadow = 'large' | 'small'

interface ITheme {
	colors: { [key in color]: string }
	breakpoints: string[]
	fontSizes: number[]
	fonts: { [key in font]: string }
	shadows: { [key in shadow]: string }
	space: number[]
}

/**
 * THEME EXPORT
 */

export const light: ITheme = {
	breakpoints: ['40em', '52em', '64em'],
	colors: {
		primary: colors.blue,
		secondary: colors.lightgray
	},
	fontSizes,
	fonts: {
		mono: fontFamily.menlo,
		sans: fontFamily.system
	},
	shadows,
	space
}
