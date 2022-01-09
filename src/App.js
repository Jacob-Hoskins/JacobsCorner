import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Videos from './components/Videos';
import Articles from './components/Articles';
import Projects from './components/Projects';
import Social from './components/Social';


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