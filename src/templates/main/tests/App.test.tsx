import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import App from 'templates/main/App'

test('load App and displays correct texts', () => {
  render(<App />)

  const titleText = screen.getByRole('heading', { name: 'React Boilerplate' })
  expect(titleText).toBeInTheDocument()

  const subtitleText = screen.getByRole('heading', {
    name: 'Now we can start out the project',
  })
  expect(subtitleText).toBeInTheDocument()
})
