import React, { useState } from 'react'
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
	Text,
	Flex,
	Image,
	Collapse,
	Avatar,
	Input
} from '@chakra-ui/core'
import styled from '@emotion/styled'

import { MdBookmarkBorder, MdPlusOne, MdShare } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'

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

const StyledAvatar = styled(Avatar)`
	&:last-child {
		background-color: red;
	}
`

const DemoComponents: React.FC = () => {
	const [uiCollapse, setUiCollapse] = useState(false)

	return (
		<>
			<Title mt={8} mb={12} fontSize='xl'>
				UI Example
			</Title>
			<Box boxShadow='xl' p={4} maxW='768px'>
				<Stack spacing={6}>
					<Flex justifyContent='space-between'>
						<Box>
							<Text fontWeight='bold' fontSize='xl' color='brand.900'>
								Suspiciously Cute Cat
							</Text>
							<Text color='gray.700'>Born in October 14th 2018</Text>
						</Box>
						<IconButton
							variantColor='brand'
							aria-label='Search database'
							icon={MdBookmarkBorder}
							isRound
							boxShadow='lg'
						/>
					</Flex>

					<Image
						src='https://placekitten.com/1920/250'
						border='1px'
						borderColor='transparent'
						borderRadius='20px'
						h='250px'
						objectFit='cover'
					/>

					<Text fontWeight='bold' letterSpacing='0.2em' color='brand.900'>
						Overview
					</Text>
					<Text as='span' color='gray.600'>
						Felis catus has had a very long relationship with humans. Ancient Egyptians may have first domesticated cats
						as early as 4,000 years ago. Plentiful rodents probably drew wild felines to human communities.{' '}
						<Text
							as='span'
							fontWeight='bold'
							cursor='pointer'
							onClick={() => setUiCollapse(!uiCollapse)}
							display={uiCollapse ? 'none' : 'inline-block'}
						>
							Read more{' '}
						</Text>
						<Collapse as='span' isOpen={uiCollapse}>
							The cats' skill in killing them may have first earned the affectionate attention of humans. Early
							Egyptians worshipped a cat goddess and even mummified their beloved pets for their journey to the next
							world—accompanied by mummified mice! Cultures around the world later adopted cats as their own companions.
							Designed by @msdesigns_
						</Collapse>
						<Text
							as='span'
							fontWeight='bold'
							cursor='pointer'
							onClick={() => setUiCollapse(!uiCollapse)}
							display={uiCollapse ? 'inline-block' : 'none'}
						>
							Read less{' '}
						</Text>
					</Text>

					<Flex>
						<Flex justifyContent='center' direction='column'>
							<Text fontWeight='bold' color='brand.900'>
								Cats
							</Text>
							<Text color='gray.600' fontSize='sm'>
								Sponsoring
							</Text>
						</Flex>
						<Flex ml={6} border='2px' borderColor='brand.500' alignItems='center' justifyContent='center' py={2} px={4}>
							<Text color='brand.500' fontWeight='bold'>
								10+
							</Text>
						</Flex>
						{/* 
						<AvatarGroup size='md' max={4}>
							{Array(10)
								.fill(0)
								.map((a, i) => (
									<StyledAvatar key={`avatar-${i}`} name={`Cat no. ${i}`} src='https://placekitten.com/50/50' />
								))}
						</AvatarGroup> */}
						<Flex ml='auto' direction='column'>
							<Text fontSize='sm' color='gray.600'>
								Highlights
							</Text>
							<Stack isInline spacing={2}>
								<Image w='40px' h='40px' src='https://placekitten.com/50/50' />
								<Image w='40px' h='40px' src='https://placekitten.com/50/51' />
								<Image w='40px' h='40px' src='https://placekitten.com/50/52' />
								<Flex w='40px' h='40px' bg='brand.400' alignItems='center' justifyContent='center' py={2} px={4}>
									<Text color='white' fontWeight='bold'>
										7+
									</Text>
								</Flex>
							</Stack>
						</Flex>
					</Flex>
					<Box boxShadow='xl' px={4} py={8}>
						<Flex alignItems='flex-start' justifyContent='space-between'>
							<Flex direction='column'>
								<Text color='gray.500' fontSize='sm'>
									Comment by <strong>Furry Paw</strong>
								</Text>
								<Text color='brand.900' pt={4}>
									"I loved the history, nice one!"
								</Text>
							</Flex>
							<IconButton
								variantColor='brand'
								size='xs'
								aria-label='Search database'
								icon={AiOutlineHeart}
								isRound
								boxShadow='lg'
							/>
						</Flex>
					</Box>
					<Input placeholder='Add a new comment' />
					<Flex justifyContent='space-around'>
						<Button variantColor='brand' rightIcon={MdPlusOne} border='1px' borderRadius='20px'>
							Sponsor
						</Button>
						<Button variantColor='brand' variant='outline' rightIcon={MdShare} border='1px' borderRadius='20px'>
							See details
						</Button>
					</Flex>
				</Stack>
			</Box>

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
