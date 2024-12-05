import React, { useState } from 'react'

function Home() {
const [name, setName] = useState("tuce");
const [age, setAge] = useState(27);
    const handleClick = () =>{
       setName("emir");
       setAge(36);
    }
   
  return (
    <div className='home'>
        <h2>Homepage</h2>
        <p>{name} is {age} years old. </p>
        <button style={{cursor: "pointer"}} onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home