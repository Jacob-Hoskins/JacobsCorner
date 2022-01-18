import React from 'react';
import styled from 'styled-components';
import Content from './Content';



function HomeArticles() {
    return (
        <Container>
            <h2>Latest Articles and Videos</h2>

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
