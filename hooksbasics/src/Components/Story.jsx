import React,{ useContext } from "react";
import { ToggleTheme } from "../App";
import UserConetx from "../Components/UserContext"


function UseContext(){
  const para = `Little Red Riding Hood set off through the woods to visit her grandma. Along the way, she encountered a cunning wolf who tricked her. The wolf reached Grandma's house first, but the brave woodsman saved the day. Little Red learned to be cautious on her adventures.`

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
      <UserConetx para={para}/>
    </div>
  )
}

export default UseContext;