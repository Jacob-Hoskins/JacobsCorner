import React from 'react'
import styled from 'styled-components'
import VideoSlider from '../components/VideoSlider'
import HomeArticles from '../components/HomeArticles'
import Nav from '../components/Nav'

function Home() {
    return (
        <Container>
            <Nav />
            <VideoSlider />
            <HomeArticles />
            
        </Container>
    )
}

export default Home

const Container = styled.main`
    margin: auto;
    background: black;
    color: white;
    min-height: 100vh;
`
