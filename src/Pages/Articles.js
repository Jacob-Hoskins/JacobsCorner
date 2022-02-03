import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Content from '../components/Content'


function Articles() {
    return (
        <Container>
            <Nav />
            <Content 
                link='/ifStatements'
                title='If Else Statements'
                date='1/19/2022'
                description='Learn what a if else statement is and how to use them inside of 
                your code!'
            />

            <Content 
                link='/pyLoops'
                title='Python loops'
                date='1/17/2022'
                description='Learn how to make python loop or repeat a certian task until you 
                achieve the desired outcome'
            />

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
    font-size: 20px;
    min-height: 100vh;
    align-items: center;
    border: solid black 2px;
    margin: auto;
    color: white;
    
    
    
`
