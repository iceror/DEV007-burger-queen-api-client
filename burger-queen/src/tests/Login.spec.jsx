import { render } from "@testing-library/react"
import { Login } from '../Components/Login'

describe('first', () => {
  test('should be a match with snapshot', () => {
    render(<Login/>)
  })
})