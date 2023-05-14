import {getByText, render, screen} from "@testing-library/react"
import Greet from "./Greet"
describe("Greet", ()=>{

  test('renders correctly',()=>{
    render(<Greet/>)
    const textElement =  screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
  })
  

})

describe('Nested', () => { 
  test('renders with a new name', ()=>{
    render(<Greet name='Vishwas'/>)
    const textElement = screen.getByText("Hello Vishwas")
    expect(textElement).toBeInTheDocument()
  })
 })
