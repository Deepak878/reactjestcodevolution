import { SkillsProps } from "./skills.types";
import React, { useEffect, useState } from "react";

const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoggedIn(true)
    },500)
  },[])
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>

      ):(
        <button onClick={()=>setLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
