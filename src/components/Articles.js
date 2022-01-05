import React from 'react'
import styled from 'styled-components'

function Articles(props) {
    return (
        <Container>
            <ArticleContainer>
                <h1>{props.title}</h1>
                <h4>{props.date}</h4>
                <h3>description</h3>
            </ArticleContainer>
        </Container>
    )
}

export default Articles

const Container = styled.div`
    display: flex;
    
    border: solid black 2px;
    
    
`

const ArticleContainer = styled.div`
    border: solid black 2px;
    margin: auto;
    
`