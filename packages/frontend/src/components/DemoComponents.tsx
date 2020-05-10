import React from 'react'
import { ColorObj } from 'theme-color-shades'
import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Button } from '@chakra-ui/core'

const DemoComponents: React.FC<{ colorObj: ColorObj }> = ({ colorObj }) => {
	console.log('demo', colorObj)
	return (
		<>
			<Alert status='info' bg={colorObj['200']}>
				<AlertIcon color={colorObj['600']} />
				<AlertTitle mr={2}>Here's an Alert example.</AlertTitle>
				<AlertDescription>Bg is 200, icon is 600.</AlertDescription>
				<CloseButton position='absolute' right='8px' top='8px' />
			</Alert>
		</>
	)
}

export default DemoComponents
