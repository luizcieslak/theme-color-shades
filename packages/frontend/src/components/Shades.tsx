import React from 'react'
import tinyColor from 'tinycolor2'
import { Box, Flex } from '@chakra-ui/core'
import CardColorHex from './ CardColorHex'
import ntcjs from 'ntcjs'

interface ShadesArgs {
	originalColor: string
	shades: tinyColor.Instance[]
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
	return (
		<>
			<Box p={4} m={4}>
				<Flex justifyContent='center' pb={2}>
					<CardColorHex hex={originalColor} name={ntcjs.name(`#${originalColor}`)[1]} />
				</Flex>
				<Flex justifyContent='center' alignItems='center' w='100%'>
					{shades.map((color, i) => (
						<ColorSquare key={`ccx-${i}`} hex={color.toHexString()} />
					))}
				</Flex>
			</Box>
		</>
	)
}

export default Shades
