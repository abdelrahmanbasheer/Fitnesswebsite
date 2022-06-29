
import { useState,React} from 'react'
import { Box } from '@mui/material'
import HeroBanner from "../components/HeroBanner"
import SearchExercises from "../components/SearchExercises"
import Exercises from "../components/Exercises"
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodypart, setBodypart] = useState("all");
  return (
    
    <Box>
      <HeroBanner></HeroBanner>
      <SearchExercises setExercises={setExercises} bodypart={bodypart} setBodyPart={setBodypart}></SearchExercises>
      <Exercises setExercises={setExercises} bodypart={bodypart} setBodyPart={setBodypart}></Exercises>
    </Box>
  )
}

export default Home