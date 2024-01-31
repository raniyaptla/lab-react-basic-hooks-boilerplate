import React, { useState } from "react";
import { useEffect } from "react";



function UserConetxt(props){
  
  const [state, setState] = useState(" ");
  const [like, setLike] = useState(0);

  const handleState = ()=>{
    setState(state=>state==" "?props.para:" ")
  }

  const handleLike = ()=>{
    setLike(like=>like+1)
  }

  useEffect(() => {
    // Check if it's not the initial render
    if (state !== " ") {
      alert("Content Button Clicked");
    }
  }, [state]);


  return(
    <div>
      <h3>{state}</h3>
      <button onClick={handleState}>Content</button>
      <h4>{like}</h4>
      <button onClick={handleLike}>Like</button>
    </div>
  )

}


export default UserConetxt;