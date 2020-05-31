import React from 'react'

import tinyColor from 'tinycolor2'
import { Box, Flex, Text, Skeleton } from '@chakra-ui/core'

interface CardColorProps {
	hex: string
	index?: number
	name?: string
}

const CardColorHex: React.FC<CardColorProps> = ({ hex, index, name }) => {
	// console.log('tsdx', sum(1, 2))
	const tinyObj = tinyColor(`${hex}`)

	let shadeNumber
	if (typeof index === 'number') {
		shadeNumber = index > 0 ? index * 100 : 50
	}

	return (
		<Flex direction='column' alignItems='center' px={1} py={2} boxShadow='md' minW='120px' minH='160px'>
			{name && <Text fontSize='sm'>{name}</Text>}
			<Skeleton isLoaded={Boolean(hex)}>
				<Box w='80px' h='80px' bg={tinyObj.toString()} />
			</Skeleton>
			{<Text fontSize='xs'>{shadeNumber}</Text>}
			<Text fontSize='sm'>{tinyObj.toHexString()}</Text>
			<Text fontSize='xs'>{tinyObj.toHslString()}</Text>
		</Flex>
	)
}

export default CardColorHex
