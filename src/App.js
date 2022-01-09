import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Videos from './Pages/Videos';
import Articles from './Pages/Articles';
import Projects from './Pages/Projects';
import Social from './Pages/Social';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/social' element={<Social />} />
      </Routes>
    </Router>
    // <Container>
    //   <Nav />
    //   <Home />
    // </Container>
  );
}

export default App;


const Container = styled.div`
  overflow: hidden;
`