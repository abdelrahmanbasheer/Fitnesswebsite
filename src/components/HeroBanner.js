import React from 'react'
import { Box,Stack,Typography ,Button} from '@mui/material'
import HeroBannerImage from "../images/banner.png"

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg:"212px",xs:"70px"},
      ml:{sm:"50px"},
    }} position="relative" p="20px">
      <Typography style={{color:"#1D44C2",fontWeight:"600" ,fontSize:"26px"}}>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{fontSize: {lg:"44px",xs:"40px"}}} mt={4} mb={3} >Sleep,Train<br/>Repeat</Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>check out the most effective exercises</Typography>
      <Button sx={{backgroundColor:"#1D44C2",padding:"10px"}} variant='contained' color="primary" href='#exercises'>Explore exercises</Button>
      <Typography 
      fontWeight={600}
      color="#1D44C2"
      sx={{opacity:0.1,display:{lg:"block" ,xs:"none"}}}
      fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className='hero-banner-img'></img>
    </Box>
  )
}

export default HeroBanner