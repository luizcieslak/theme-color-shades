import React from 'react'
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	CloseButton,
	Button,
	Box,
	Stack,
	Spinner,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Icon,
	Checkbox,
	Switch,
	CircularProgress,
	IconButton,
	RadioGroup,
	Radio,
	Text
} from '@chakra-ui/core'
import styled from '@emotion/styled'

const Title = styled(Text)`
	position: relative;
	&:after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 0;
		width: 40px;
		height: 5px;
		background: ${props => props.theme.colors.brand['500']};
	}
`

const DemoComponents: React.FC = () => {
	return (
		<>
			<Title mt={8} mb={12} fontSize='xl'>
				Written texts
			</Title>
			<Stack spacing={4}>
				<Box>
					<Text fontFamily='Roboto' color='brand.900' fontWeight='bold' fontSize='xl' letterSpacing='0.05px'>
						Roboto Title
					</Text>
					<Text fontFamily='Roboto' color='brand.800'>
						Roboto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum urna ac tortor mattis, id
						cursus odio pulvinar. Nunc vitae auctor nulla, sit amet tristique purus. Maecenas aliquam risus at orci
						volutpat varius. Donec ut ligula egestas, egestas urna ac, suscipit tortor. Aenean efficitur urna non felis
						hendrerit, vel scelerisque odio molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.
						Etiam eu vestibulum velit. In ut sollicitudin dolor, at tristique purus.
					</Text>
				</Box>
				<Box>
					<Text fontFamily='Montserrat' color='brand.900' fontWeight='bold' fontSize='xl' letterSpacing='0.05px'>
						Montserrat Title
					</Text>
					<Text fontFamily='Montserrat' color='brand.800'>
						Montserrat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum urna ac tortor mattis, id
						cursus odio pulvinar. Nunc vitae auctor nulla, sit amet tristique purus. Maecenas aliquam risus at orci
						volutpat varius. Donec ut ligula egestas, egestas urna ac, suscipit tortor. Aenean efficitur urna non felis
						hendrerit, vel scelerisque odio molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.
						Etiam eu vestibulum velit. In ut sollicitudin dolor, at tristique purus.
					</Text>
				</Box>
				<Box>
					<Text fontFamily='Lato' color='brand.900' fontWeight='bold' fontSize='xl' letterSpacing='0.05px'>
						Lato Title
					</Text>
					<Text fontFamily='Montserrat' color='brand.800'>
						Lato Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum urna ac tortor mattis, id cursus
						odio pulvinar. Nunc vitae auctor nulla, sit amet tristique purus. Maecenas aliquam risus at orci volutpat
						varius. Donec ut ligula egestas, egestas urna ac, suscipit tortor. Aenean efficitur urna non felis
						hendrerit, vel scelerisque odio molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.
						Etiam eu vestibulum velit. In ut sollicitudin dolor, at tristique purus.
					</Text>
				</Box>
			</Stack>

			<Title mt={8} mb={12} fontSize='xl'>
				Alerts
			</Title>

			<Stack spacing={4}>
				<Alert status='info'>
					<AlertIcon />
					<AlertTitle mr={2}>Here's an Alert example.</AlertTitle>
					<AlertDescription>Bg is 200, icon is 600.</AlertDescription>
					<CloseButton position='absolute' right='8px' top='8px' />
				</Alert>

				<Alert status='info' variant='solid'>
					<AlertIcon />
					<AlertTitle mr={2}>Same as previous.</AlertTitle>
					<AlertDescription color='white'>with a white text.</AlertDescription>
					<CloseButton position='absolute' right='8px' top='8px' />
				</Alert>

				<Alert status='info' variant='left-accent'>
					<AlertIcon />
					<AlertTitle mr={2}>Left accent.</AlertTitle>
					<AlertDescription>Alert!</AlertDescription>
					<CloseButton position='absolute' right='8px' top='8px' />
				</Alert>
			</Stack>

			<Title mt={8} mb={12} fontSize='xl'>
				Buttons
			</Title>

			<Stack isInline spacing={4} flexWrap='wrap'>
				<Button
					py={4}
					variantColor='brand'
					// bg={'brand.500'}
					// border='1px'
					// borderRadius='5px'
					// color='white'
					//  _hover={{ bg: 'brand.600' }}
				>
					Solid
				</Button>
				<Button
					bg='white'
					variant='outline'
					border='1px'
					borderRadius='5px'
					variantColor='brand'
					// color={'brand.500'}
					// borderColor={'brand.500'}
					// _hover={{ bg: 'brand.100' }}
				>
					Outline
				</Button>
				<Button
					py={4}
					bg='white'
					variant='ghost'
					variantColor='brand'
					// color={'brand.500'} _hover={{ bg: 'brand.100' }}
				>
					Ghost
				</Button>
				<Button py={4} variantColor='brand' variant='link'>
					Link
				</Button>
				<IconButton variantColor='brand' aria-label='Search database' icon='search' />
			</Stack>
			<Title mt={8} mb={12} fontSize='xl'>
				Progress and Spinners
			</Title>

			<Stack isInline spacing={4}>
				<CircularProgress isIndeterminate color='brand' />
				<Spinner color={'brand.500'} size='xs' />
				<Spinner color={'brand.500'} size='sm' />
				<Spinner color={'brand.500'} size='md' />
				<Spinner color={'brand.500'} size='lg' />
				<Spinner color={'brand.500'} size='xl' />
			</Stack>

			<Title mt={8} mb={12} fontSize='xl'>
				Breadcrumb
			</Title>

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

			<Title mt={8} mb={12} fontSize='xl'>
				Form components
			</Title>

			<Stack spacing={4}>
				<Checkbox variantColor='brand' defaultIsChecked>
					Checkbox
				</Checkbox>
				<RadioGroup defaultValue='2' spacing={5} isInline>
					<Radio variantColor='brand' value='1'>
						Radio
					</Radio>
					<Radio variantColor='brand' value='2'>
						Radio
					</Radio>
				</RadioGroup>
				<Stack align='center' isInline>
					<Switch color='brand' size='sm' defaultIsChecked />
					<Switch color='brand' size='md' />
					<Switch color='brand' size='lg' defaultIsChecked />
				</Stack>
			</Stack>
		</>
	)
}

export default DemoComponents
