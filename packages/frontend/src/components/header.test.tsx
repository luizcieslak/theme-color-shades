import React from 'react'
import { render } from '@testing-library/react'

import Header from './header'

describe('Header', () => {
	it('renders correctly', () => {
		const tree = render(<Header siteTitle='Default Starter' />)
		expect(tree).toMatchSnapshot()
	})
})
