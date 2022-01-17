import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Content from '../components/Content'


function Articles() {
    return (
        <Container>
            <Nav />
            <Content
                link='/pythonBasics'
                title='Python Basics'
                date='1/16/22'
                description='Learn the building blocks and fundamentals of python. In this lesson we will cover
                Variables, built-in funcitons, data types, and how to use math.'
            />
            
        </Container>
    )
}

export default Articles

const Container = styled.div`
    min-height: 100vh;
    align-items: center;
    border: solid black 2px;
    margin: auto;
    color: white;
    
    
    
`
