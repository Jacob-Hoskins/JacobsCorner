import React from 'react';
import styled from 'styled-components';
import Content from './Content';



function HomeArticles() {
    return (
        <Container>
            <h2>Latest Articles and Videos</h2>

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

export default HomeArticles


const Container = styled.div`
    position: relative;
    top: -45vh;
    border: solid black 2px;
    margin: 10px;
    text-align: center;
`
