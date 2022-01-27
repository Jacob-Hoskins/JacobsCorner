import React from 'react'
import styled from 'styled-components'
import Content from '../components/Content'
import Nav from '../components/Nav'


function Projects() {
    return (
        <Container>
            <Nav />
            <Content 
                link='/pythonCalcVid'
                title="Python Calculator tutorial"
                date='1/27/2022'
                description='Learn how to use if statements and while loops to create a calculator in Python.'
            />
        </Container>
    )
}

export default Projects

const Container = styled.div`
    color: white;
    min-height: 100vh;
`