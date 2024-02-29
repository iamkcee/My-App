import "../css/About.css"
import React from 'react'
import Hero from "../components/Hero";
import img from "../assets/images/WhatsApp Image 2024-01-24 at 23.08.44_addb0aac.jpg"

const About = () => {
      // Jsx
  const myJsx = <h3>This is awesome JSX</h3>

  const myStyle = {listStyle: "none", color: "white", backgroundColor:"black", borderRadius:"15px", width:"50%", marginInline:"auto"}
  // foos
  const myFavFood = ["amala", "tuwo", "jollof", "spaghetti"]
  return (
    <>
    {/* <Menu/> */}
        <div>
          <Hero heading="Welcome to about Page" image={img}/>
      <h1>Kcee's React App 1.0</h1>
      {myJsx}
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates consectetur nam unde animi reiciendis pariatur eos reprehenderit dolorum eius est.</p>
      
      {/* map through food array */}
      <h3>My favourite food</h3>
      {myFavFood.map((f, index) => {
        return (
          <div className="" key={index} style={myStyle}>
          <p>My favourite food {f}</p>
        </div>
        );
      })}
    </>
  );
};

export default About