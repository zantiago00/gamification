import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Intro from '../pages/Intro'

jest.mock('shadcn-ui', () => ({
  Button: (props) => <button {...props} />,
  Badge: (props) => <span {...props} />,
}))

test('renders heading and button', () => {
  render(
    <BrowserRouter>
      <Intro />
    </BrowserRouter>
  )
  expect(screen.getByRole('heading', { name: /Introducción al Storytelling Digital/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /Comenzar misión/i })).toBeInTheDocument()
})
