import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'


function Projects() {
    return (
        <Container>
            <Nav />
        </Container>
    )
}

export default Projects

const Container = styled.div`
    background: black;
    color: white;
    min-height: 100vh;
`