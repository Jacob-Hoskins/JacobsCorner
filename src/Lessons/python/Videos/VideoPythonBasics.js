import React from 'react';
import styled from 'styled-components';
import Nav from '../../../components/Nav';

function VideoPythonBasics() {
  return(
      <Container>
        <Nav />
        <Header>
            <h1>Python Basics</h1>
        </Header>
        <Vid>
            <video src='../Videos/PythonCalc.mp4' type="video/mp4" controls>
            </video>
        </Vid>
      </Container>
  )
}

export default VideoPythonBasics;
const Container = styled.div`

`

const Vid = styled.main`
    display: flex;
    
    video{
        margin: auto;
        width: 75%;
        height: 75%;
        
    }


`

const Header = styled.header`
    display: relative;
    text-align: center;

`