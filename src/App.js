import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Videos from './Pages/Videos';
import Articles from './Pages/Articles';
import Projects from './Pages/Projects';
import Social from './Pages/Social';
import PythonBasics from './Lessons/python/PythonBasics';
import PythonFunc from './Lessons/python/PythonFunc';
import PythonBuiltIn from './Lessons/python/PythonBuiltIn';
import PythonMath from './Lessons/python/PythonMath';
import DoMath from './Lessons/python/DoMath';
import Loops from './Lessons/python/Loops';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/social' element={<Social />} />
        <Route path='/pythonBasics' element={<PythonBasics />} />
        <Route path ='functions' element={<PythonFunc replace to='/functions'/>} />
        <Route path='printFunction' element={<PythonBuiltIn />}/>
        <Route path='pythonMath' element={<PythonMath />} />
        <Route path='pythonCalc' element={<DoMath />} />
        <Route path='pyLoops' element={<Loops />} />
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