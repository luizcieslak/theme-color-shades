import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import tinyColor from 'tinycolor2'
import { Box, Input, Flex, Text } from '@chakra-ui/core'

function CardColor({ tinyObj, index }: { tinyObj: tinycolor.Instance; index: number }) {
	console.log('tiny', tinyObj.toString(), tinyObj.toHexString(), tinyObj.toHex8String())

	return (
		<Flex direction='column' alignItems='center' p={1} w='120px' border='1px'>
			<Box w='80px' h='80px' bg={tinyObj.toString()} />
			<Text fontSize='xs'>{(index + 1) * 100}</Text>
			<Text fontSize='sm'>{tinyObj.toHexString()}</Text>
			<Text fontSize='xs'>{tinyObj.toHslString()}</Text>
		</Flex>
	)
}

const App = () => {
	const [color, setColor] = useState('3e2f5b') // 500

	const obj = tinyColor(`#${color}`)

	// darken 4 colors: 600, 700, 800, 900
	const darkened = Array(4)
		.fill(0)
		.map((el, i) => {
			return obj.clone().darken((i + 1) * 10)
		})

	// lighten 4 colors: 100, 200, 300, 400
	const lightened = Array(4)
		.fill(0)
		.map((el, i) => {
			return obj.clone().lighten((i + 1) * 10)
		})

	// darken 4 colors: 600, 700, 800, 900
	const saturated = Array(4)
		.fill(0)
		.map((el, i) => {
			return obj.clone().saturate((i + 1) * 10)
		})

	// lighten 4 colors: 100, 200, 300, 400
	const desaturated = Array(4)
		.fill(0)
		.map((el, i) => {
			return obj.clone().desaturate((i + 1) * 10)
		})

	// darken 4 colors: 600, 700, 800, 900
	const bothPlus = Array(4)
		.fill(0)
		.map((el, i) => {
			return obj
				.clone()
				.darken((i + 1) * 10)
				.saturate((i + 1) * 10)
		})

	// lighten 4 colors: 100, 200, 300, 400
	const bothMinus = Array(4)
		.fill(0)
		.map((el, i) => {
			return obj
				.clone()
				.lighten((i + 1) * 10)
				.desaturate((i + 1) * 10)
		})

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
			<Input type='text' value={color} onChange={(e: any) => setColor(e.target.value)} />
			<br />
			{color}
			<br />
			<CardColor tinyObj={obj} index={4} />
			<br />
			<Flex justifyContent='center'>
				{[...lightened.reverse(), obj, ...darkened].map((color, index) => (
					<CardColor key={`cc-${index}`} tinyObj={color} index={index} />
				))}
			</Flex>
			<br />
			<Flex justifyContent='center'>
				{[...desaturated.reverse(), obj, ...saturated].map((color, index) => (
					<CardColor key={`cc-${index}`} tinyObj={color} index={index} />
				))}
			</Flex>
			<br />
			<Flex justifyContent='center'>
				{[...bothMinus.reverse(), obj, ...bothPlus].map((color, index) => (
					<CardColor key={`cc-${index}`} tinyObj={color} index={index} />
				))}
			</Flex>
		</div>
	)
}

export default App
