import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Content from '../components/Content'


function Videos() {
    return (
        <Container>
            <Nav />
            <Content 
                link='/pythonBasicsVideo'
                title='Python Basics'
                date='1/19/2022'
                description='Learn the basics of Python.'
            />

            <Content 
                link='/pythonCalcVid'
                title="Python Calculator tutorial"
                date='1/27/2022'
                description='Learn how to use if statements and while loops to create a calculator in Python.'
            />
        </Container>
    )
}

export default Videos

const Container = styled.div`
    color: white;
    min-height: 100vh;
`
