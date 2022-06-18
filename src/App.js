import React from 'react'
import "./App.css";
import {Route,Routes} from 'react-router-dom';
import {Box} from "@mui/material";
import Exercisedetail from "./pages/Exercisedetail"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from './components/Footer';


const App = () => {
  return (
    <Box width="400px" sx={{width:{xl: "1488px"}}} m="auto">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path='/exercise/:id' element={<Exercisedetail></Exercisedetail>}></Route>
        </Routes>
        <Footer></Footer>

    </Box>
  )
}

export default App