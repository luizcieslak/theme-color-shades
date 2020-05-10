import { Command, flags } from '@oclif/command'
import shades from 'theme-color-shades'

import chalk from 'chalk'
// 	color: string
// }

import tinyColor from 'tinycolor2'

import asciiArt from 'ascii-art'
require('dotenv').config()

import path from 'path'

type outputFormat = 'object' | 'array'

class Cli extends Command {
	static description = 'describe the command here'

	static flags = {
		// see: https://oclif.io/docs/flags#__docusaurus
		// add --version flag to show CLI version
		version: flags.version({ char: 'v' }),
		help: flags.help({ char: 'h' }),
		// flag with a value (-n, --name=VALUE)
		name: flags.string({ char: 'n', description: 'name to print' }),
		// flag with no value (-f, --force)
		// force: flags.boolean({ char: 'f' }),
		format: flags.string({
			char: 'f',
			description: 'output format. It can be array or object.',
			options: ['array', 'object'],
		}),
	}

	static args = [
		{
			// see: https://oclif.io/docs/args#__docusaurus
			name: 'color',
			required: true,
			description:
				'Color in HEX format. Since # needs to be escaped from terminal, wrap it in quotes or remove the #, e.g. "#312333" or 312333.',
		},
	]

	async run() {
		const { args, flags } = this.parse(Cli)
		console.log('args, flags', args, flags, 'alooo')

		// this.log(`
		// 	m    #                                                ""#                                #                 #
		// mm#mm  # mm    mmm   mmmmm   mmm           mmm    mmm     #     mmm    m mm          mmm   # mm    mmm    mmm#   mmm    mmm
		// 	#    #"  #  #"  #  # # #  #"  #         #"  "  #" "#    #    #" "#   #"  "        #   "  #"  #  "   #  #" "#  #"  #  #   "
		// 	#    #   #  #""""  # # #  #""""   """   #      #   #    #    #   #   #      """    """m  #   #  m"""#  #   #  #""""   """m
		// 	"mm  #   #  "#mm"  # # #  "#mm"         "#mm"  "#m#"    "mm  "#m#"   #            "mmm"  #   #  "mm"#  "#m##  "#mm"  "mmm"
		// `)

		const result = shades({
			color: args.color,
			saturation: true,
			hue: true,
			outputFormat: (flags.format as outputFormat) ?? 'object',
		})

		const rgbColor = tinyColor(args.color).toRgb()

		// TODO: Check if this path is the same when published to npm.
		const art1 = await asciiArt
			.image({
				filepath: path.join(__dirname + '/images/colorwheel.png'),
				width: 20,
				height: 20,
				alphabet: 'variant4',
			})
			.toPromise()

		this.log(art1)
		this.log(`Theme Color Shades ${this.config.version} \n`)

		this.log(
			`Hello! Here is your requested shades using ${chalk
				.rgb(rgbColor.r, rgbColor.g, rgbColor.b)
				.inverse(args.color)} as reference:\n`
		)

		this.log(JSON.stringify(result))

		this.log(
			`\nWanna see how these shades play out in some components before using?
Check it out here: ${process.env.URL}/components/?color=${tinyColor(args.color).toHexString().slice(1)}`
		)

		// const name = flags.name ?? 'world'
		// this.log(`hello ${name} from ./src/index.ts`)
		// if (args.file && flags.force) {
		// this.log(`you input --force and --file: ${args.file}`)
		// }
	}
}

export = Cli
