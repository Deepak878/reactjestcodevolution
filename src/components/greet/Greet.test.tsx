import { render, screen} from "@testing-library/react"
import Greet from "./Greet"
describe("Greet", ()=>{

  test('renders correctly',()=>{
    render(<Greet/>)
    const textElement =  screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument()
  })
  

})

