import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Content from '../components/Content'


function Articles() {
    return (
        <Container>
            <Nav />
            <Content 
                title='Python Basics'
                date='1/13/22'
                description='test'
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
    background: black;
    color: white;
    
    
    
`
