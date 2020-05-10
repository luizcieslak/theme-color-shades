import React from 'react'
import { ColorObj } from 'theme-color-shades'
import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Button, Box, Flex, Stack } from '@chakra-ui/core'

const DemoComponents: React.FC<{ colorObj: ColorObj }> = ({ colorObj }) => {
	console.log('demo', colorObj)
	return (
		<>
			<Alert status='info' bg={colorObj['500']}>
				<AlertIcon color={colorObj['600']} />
				<AlertTitle mr={2}>Here's an Alert example.</AlertTitle>
				<AlertDescription>Bg is 200, icon is 600.</AlertDescription>
				<CloseButton position='absolute' right='8px' top='8px' />
			</Alert>

			<Box py={2} />

			<Alert status='info' bg={colorObj['500']}>
				<AlertIcon color={colorObj['100']} />
				<AlertTitle mr={2} color='white'>
					Same as previous.
				</AlertTitle>
				<AlertDescription color='white'>with a white text.</AlertDescription>
				<CloseButton position='absolute' right='8px' top='8px' />
			</Alert>

			<Box py={2} />

			<Stack isInline spacing={4} flexWrap='wrap'>
				<Button
					py={4}
					bg={colorObj['500']}
					border='1px'
					borderRadius='5px'
					color='white'
					_hover={{ bg: colorObj['600'] }}
				>
					Solid
				</Button>
				<Button
					bg='white'
					variant='outline'
					border='1px'
					borderRadius='5px'
					color={colorObj['500']}
					borderColor={colorObj['500']}
					_hover={{ bg: colorObj['100'] }}
				>
					Outline
				</Button>
				<Button py={4} bg='white' variant='ghost' color={colorObj['500']} _hover={{ bg: colorObj['100'] }}>
					Ghost
				</Button>
				<Button py={4} color={colorObj['500']} variant='link'>
					Link
				</Button>
			</Stack>
		</>
	)
}

export default DemoComponents
