import { Command, flags } from '@oclif/command'
import shades from 'theme-color-shades'

// interface Args {
// 	color: string
// }

type outputFormat = 'object' | 'array'

class Cli extends Command {
	static description = 'describe the command here'

	static flags = {
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

	static args = [{ name: 'color' }]

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
		this.log(JSON.stringify(result))

		// const name = flags.name ?? 'world'
		// this.log(`hello ${name} from ./src/index.ts`)
		// if (args.file && flags.force) {
		// this.log(`you input --force and --file: ${args.file}`)
		// }
	}
}

export = Cli
