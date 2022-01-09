import React from 'react';
import styled from 'styled-components';
import Content from './Content';



function HomeArticles() {
    return (
        <Container>
            <h2>Display Articles and Videos</h2>
            <Content />
            <Content />
            <Content />
        </Container>
    )
}

export default HomeArticles


const Container = styled.div`
    border: solid black 2px;
    margin: 10px;
    min-height: 100vh;
`
