import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Github() {
    const[data,setdata]=useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/hiteshchoudhary').then(response=>response.json())
      .then(data=>{console.log(data);
    setdata(data)})
    
    }, [])
    
  return (
    <div>Github:{data.followers} </div>
  )
}

export default Github