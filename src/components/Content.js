import React from 'react'
import styled from 'styled-components';

function Content() {
    return (
        <Container>
            <h1>Title</h1>
            <h4>Date</h4>
            <h3>Description</h3>
        </Container>
    )
}

export default Content


const Container = styled.div`
    border: solid black 2px;
    margin: 10px;

`
