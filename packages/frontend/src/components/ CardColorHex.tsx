import React from 'react'

import tinyColor from 'tinycolor2'
import { Box, Flex, Text, Skeleton, Stack } from '@chakra-ui/core'

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
		<Stack spacing={1} alignItems='center' px={6} py={4} boxShadow='md' minH='160px'>
			{name && <Text fontSize='md'>{name}</Text>}
			<Skeleton isLoaded={Boolean(hex)}>
				<Box w='100px' h='100px' bg={tinyObj.toString()} />
			</Skeleton>
			{<Text fontSize='xs'>{shadeNumber}</Text>}
			<Text fontSize='sm'>{tinyObj.toHexString()}</Text>
			<Text fontSize='xs'>{tinyObj.toHslString()}</Text>
		</Stack>
	)
}

export default CardColorHex
