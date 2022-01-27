import React from 'react';
import styled from 'styled-components';
import Nav from '../../../components/Nav';

function PyBasicsVid() {
  return(
    <Container>
        <Nav />
        <Vid>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/E3dZvpkX3Y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Vid>
    </Container>
  );
}

export default PyBasicsVid;

const Container = styled.div`
`

const Vid = styled.main`
    display: responsive;
    width: 74vw;
    align-items: center;
    justify-content: center;
    margin: auto;

    iframe{
        width: 75vw;
        height: 75vh;
    }
`