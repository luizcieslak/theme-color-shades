import React from 'react'
import tinyColor from 'tinycolor2'
import { Box, Flex } from '@chakra-ui/core'
import CardColorHex from './ CardColorHex'
import ntcjs from 'ntcjs'
import SEO from './seo'

interface ShadesArgs {
	originalColor: string
	shades: string[]
}

interface CardColorProps {
	hex: string
}

const ColorSquare: React.FC<CardColorProps> = ({ hex }) => {
	// console.log('tsdx', sum(1, 2))
	const tinyObj = tinyColor(`${hex}`)

	return <Box w={['8%', '80px']} h={['20px', '50px', '80px']} minH='20px' bg={tinyObj.toString()} />
}

const Shades: React.FC<ShadesArgs> = ({ originalColor, shades }) => {
	const nameByNtcjs = ntcjs.name(`#${originalColor}`)[1]
	console.log('Shades originalColor', originalColor)
	return (
		<>
			<SEO title={nameByNtcjs} />
			<Box p={4} m={4}>
				<Flex justifyContent='center' pb={4}>
					<CardColorHex hex={originalColor} name={nameByNtcjs} />
				</Flex>
				<Flex justifyContent='center' alignItems='center' w='100%'>
					{shades.map((color, i) => (
						<ColorSquare key={`ccx-${i}`} hex={color} />
					))}
				</Flex>
			</Box>
		</>
	)
}

export default Shades
