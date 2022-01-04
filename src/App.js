import React from 'react';
import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <Container>
      <Nav />
      <Home />
    </Container>
  );
}

export default App;


const Container = styled.div`
  overflow: hidden;
`