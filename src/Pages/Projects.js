import React from 'react'
import styled from 'styled-components'
import Content from '../components/Content'
import Nav from '../components/Nav'


function Projects() {
    return (
        <Container>
            <Nav />
            <Content 
            link='/pythonCalc'
            title='Python first calculator'
            date='1/17/2022'
            description='In this project we will be using what we learned from the Python basics lesson
            and add in one more thing to create a calculator. You will be able to run the calculator in 
            the terminal and in the project, the goal is to pass two parameters to a function and have it
            return the desired answer.
            '
            />
        </Container>
    )
}

export default Projects

const Container = styled.div`
    color: white;
    min-height: 100vh;
`