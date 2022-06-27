import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from "../images/Logo.png"

const Navbar = () => {
  return (
   <Stack direction="row" justifyContent="space-around "sx={{gap : {sm:"122px" ,xs:"40px" },mt:{sm:"32px", xs:"20px"},justifyContent:"none" }}px="20px">
    <Link to="/">
    <img src={Logo} alt></img>
    </Link>
    <Stack direction="row" gap="40px " fontSize="24" alignItems="flex-end">
      <Link to="/" style={{textDecoration :"none" , color:"#3a1212",borderBottom:"3px solid #1D44C2"}}>Home</Link>
      <a href='#exercises' style={{textDecoration: "none", color: "#3a1212"}}>Exercises</a>
    </Stack>
   </Stack>
  )
}

export default Navbar