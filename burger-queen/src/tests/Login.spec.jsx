import { render } from "@testing-library/react"
import { Login } from '../Components/Login'
import { MemoryRouter, Routes } from "react-router"

describe('first', () => {
  test('should be a match with snapshot', () => {
    render(<MemoryRouter>
      <Login />
    </MemoryRouter>)
  })
})