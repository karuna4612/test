import React from 'react'
// import './mystyle.css';

export const Firstpage = () => {
  let style_obj={
    fontSize:"24px",
    color:"red",
    width:"100%",
    textAlign:"center",
    padding:"10px"
  }
  return (
    <>
    <h1>Hello world</h1>
    <br/>
    <input type='text'/>
    <div className='demo' style={style_obj}></div>
    </>
  )
}

