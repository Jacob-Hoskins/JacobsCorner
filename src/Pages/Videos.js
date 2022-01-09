import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'


function Videos() {
    return (
        <Container>
            <Nav />
        </Container>
    )
}

export default Videos

const Container = styled.div`
    background-color: black;
    color: white;
    min-height: 100vh;
`