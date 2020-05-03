// const fs = require('fs')
// const readline = require('readline')

import shades from './shades'

// import { join as pathJoin } from 'path'

// import hexToHsl from 'hex-to-hsl'

// async function processLineByLine() {
// 	const path = pathJoin(__dirname + '../../../src' + '/green-funny.txt')
// 	const fileStream = fs.createReadStream(path)

// 	const rl = readline.createInterface({
// 		input: fileStream,
// 		crlfDelay: Infinity
// 	})
// 	// Note: we use the crlfDelay option to recognize all instances of CR LF
// 	// ('\r\n') in input.txt as a single line break.

// 	for await (const line of rl) {
// 		// Each line in input.txt will be successively available here as `line`.
// 		console.log(`Line from file: ${line} - HSL: ${hexToHsl(line)}`)
// 	}
// }

// processLineByLine()

export default shades
