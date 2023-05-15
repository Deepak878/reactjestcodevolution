import Skills from "../skills/skills"
import { GreetProps } from "./greet.types"

const Greet = (props:GreetProps) => {
  const skills = ['HTML','CSS','Javascript'];
  return (
    <>
    <div>Hello {props.name ? props.name : "Guest"}</div>
    <Skills skills={skills}/>
    </>
  )
}

export default Greet
