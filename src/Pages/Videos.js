import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Content from '../components/Content'


function Videos() {
    return (
        <Container>
            <Nav />
            <Content
                link='/FrontEndCrashCourse'
                title='HTML &amp; CSS Crash Course'
                date='2/2/2022'
                description='Learn the basics of HTML and CSS, then create a login screen to 
                learn the basics.'
            />

            <Content 
                link="/PythonDirectory"
                title="Python Directory GUI"
                date='1/25/2022'
                description='Learn the power of Python and how to use some built in modules to
                give your data or personal project a nice user interface'
            />

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
    font-size: 20px;
    color: white;
    min-height: 100vh;
`
