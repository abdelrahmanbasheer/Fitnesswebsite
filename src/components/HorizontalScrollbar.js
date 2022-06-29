import React from 'react'
import {Box} from "@mui/material"
import BodyParts from './BodyParts'

const HorizontalScrollbar = ({data,bodypart,setBodypart}) => {
  return (
    <div>
   {
    data.map((item)=>(
        <Box 
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        margin="0 40px"
        >
            <BodyParts item={item} bodyparts={bodypart} setBodypart={setBodypart}>

            </BodyParts>

        </Box>
    ))
   }
   </div>
  )
}

export default HorizontalScrollbar