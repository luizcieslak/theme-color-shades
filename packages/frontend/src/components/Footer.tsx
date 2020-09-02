import React from 'react'
import { Text, Divider, Box, Link } from '@chakra-ui/core'

const Footer = () => {
	return (
		<>
			<Divider />
			<Box py={4}>
				<Text color='gray.500' textAlign='center'>
					This site is powered by Vercel
				</Text>
				<Text color='gray.500' textAlign='center'>
					Released under the MIT License
				</Text>
				<Text color='gray.500' textAlign='center'>
					Copyright © 2020{' '}
					<Link href='https://cieslak.dev' rel='noopener' target='_blank' color='brand.600'>
						cieslak.dev
					</Link>
				</Text>
			</Box>
		</>
	)
}

export default Footer
