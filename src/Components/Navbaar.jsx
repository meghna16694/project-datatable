import React from 'react'
import { Link } from 'react-router-dom'

export const Navbaar = () => {
  return (

    <div style={{width:'100%',height:'700px',backgroundColor:'black'}}> 
      <nav1 style={{marginLeft:'200px'}} >
    
      <h1 style={{marginLeft:'40%',color:'grey',backgroundColor:'orange',width:'220px',padding:'20px',borderRadius:'10px',}}>Shopping Mall</h1> <br/><br/><br/>
        <Link to ='/Fetch' style={{marginLeft:'44%',fontSize:'30px', border:'1px solid black',padding:'10px',border:'5px solid orange',padding:'10px',borderRadius:'10px'}}>Products</Link>
        </nav1>
        
    </div>
   
  )
}
