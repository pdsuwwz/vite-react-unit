/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@/components/App'


describe('test App', () => {
  it('displays message', () => {
    const { container, getByText } = render(
      <App />
    )

    expect(container.textContent).toContain('Vite + Typescript + React!')
    expect(getByText(/count is/i)).toBeTruthy()
  })

  it('count is 1 after clicking the button', () => {
    const { getByText, getByRole } = render(
      <App />
    )

    userEvent.click(getByText(/count is/i))
    expect(getByRole('button').textContent).toBe('count is: 1')
  })

  it('count is 2 after double clicking the button', () => {
    const { getByText, getByRole } = render(
      <App />
    )

    userEvent.dblClick(getByText(/count is/i))
    expect(getByRole('button').textContent).toBe('count is: 2')
  })
})
