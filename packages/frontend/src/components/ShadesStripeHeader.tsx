import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import tinyColor from 'tinycolor2'

interface CardColorProps {
	hex: string
}

interface ShadesStripeProps {
	shades: string[]
}

const ColorSquare: React.FC<CardColorProps> = ({ hex }) => {
	// console.log('tsdx', sum(1, 2))
	const tinyObj = tinyColor(`${hex}`)

	return <Box w={['12px', '20px']} h={['12px', '20px']} bg={tinyObj.toString()} />
}

const ShadesStripeHeader: React.FC<ShadesStripeProps> = ({ shades }) => {
	return (
		<Flex justifyContent='center' alignItems='center' w='100%'>
			{shades.map((color, i) => (
				<ColorSquare key={`ccx-${i}`} hex={color} />
			))}
		</Flex>
	)
}

export default ShadesStripeHeader
