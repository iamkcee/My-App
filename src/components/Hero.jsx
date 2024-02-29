import React from 'react'
import hero from "../assets/images/wp4007378-lil-durk-wallpapers.jpg"

const Hero = (props) => {
    // destructuring props
    const {heading, image} = props

  return (
    <div style={{backgroundColor: "black", color: "white", borderRadius: "15px"}}>
        <div className="">
            <img src={image} alt="" height="400px"/>
        </div>
        {/* <h1>Welcome to my Page</h1> */}
        <h1>{heading}</h1>
    </div>
  )
}

export default Hero 