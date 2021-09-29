import React from "react"

import img from "../src/Img/nklogo.png"
import Common from "./Common";
const Home=()=>{
  return(
    <>

<Common 
name="welcome to my page"
imgsrc={img}
visit="./Contact"
info="read best of our achivements"
btname="Get contact"
 />
    </>
  )
} 

export default Home;