import React from 'react'
import { ColorObj } from 'theme-color-shades'
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	CloseButton,
	Button,
	Box,
	Flex,
	Stack,
	Spinner,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Icon
} from '@chakra-ui/core'

const DemoComponents: React.FC = () => {
	return (
		<>
			<Alert status='info' bg='brand.500'>
				<AlertIcon color='brand.600' />
				<AlertTitle mr={2}>Here's an Alert example.</AlertTitle>
				<AlertDescription>Bg is 200, icon is 600.</AlertDescription>
				<CloseButton position='absolute' right='8px' top='8px' />
			</Alert>

			<Box py={2} />

			<Alert status='info' bg={'brand.500'}>
				<AlertIcon color={'brand.100'} />
				<AlertTitle mr={2} color='white'>
					Same as previous.
				</AlertTitle>
				<AlertDescription color='white'>with a white text.</AlertDescription>
				<CloseButton position='absolute' right='8px' top='8px' />
			</Alert>

			<Box py={2} />

			<Stack isInline spacing={4} flexWrap='wrap'>
				<Button py={4} bg={'brand.500'} border='1px' borderRadius='5px' color='white' _hover={{ bg: 'brand.600' }}>
					Solid
				</Button>
				<Button
					bg='white'
					variant='outline'
					border='1px'
					borderRadius='5px'
					color={'brand.500'}
					borderColor={'brand.500'}
					_hover={{ bg: 'brand.100' }}
				>
					Outline
				</Button>
				<Button py={4} bg='white' variant='ghost' color={'brand.500'} _hover={{ bg: 'brand.100' }}>
					Ghost
				</Button>
				<Button py={4} color={'brand.500'} variant='link'>
					Link
				</Button>
			</Stack>
			<Box py={2} />
			<Stack isInline spacing={4}>
				<Spinner color={'brand.500'} size='xs' />
				<Spinner color={'brand.500'} size='sm' />
				<Spinner color={'brand.500'} size='md' />
				<Spinner color={'brand.500'} size='lg' />
				<Spinner color={'brand.500'} size='xl' />
			</Stack>

			<Breadcrumb spacing='8px' separator={<Icon color={'brand.500'} name='chevron-right' />}>
				<BreadcrumbItem>
					<BreadcrumbLink href='/'>Home</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink href='/'>About</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href='/'>Contact</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</>
	)
}

export default DemoComponents
