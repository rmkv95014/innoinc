import React from 'react';
import './App.css';
import logo from './altLogo.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Fonts from './Fonts';
import { motion } from 'framer-motion';
import Team from './pages/Team';
import './App.css'
import IDC from './pages/IDC';
import CurriculumSection from './components/CurriculumSection';
import VideoPlayer from './components/VideoPlayer';
import Chapters from './pages/Chapters';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/:section/:id/:name' element={<VideoPlayer />} />
          <Route path='/team' element={<Team />}></Route>
          <Route path='/idc' element={<IDC />}></Route>
          <Route path='/chapters' element={<Chapters />} />
          <Route path='/curriculum/:section' element={<CurriculumSection />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/' element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider >
  );
}

export default App;
