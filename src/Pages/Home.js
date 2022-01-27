import React from 'react'
import styled from 'styled-components'
import VideoSlider from '../components/VideoSlider'
import HomeArticles from '../components/HomeArticles'
import Nav from '../components/Nav'
import LanguageSelector from '../components/LanguageSelector'

function Home() {
    return (
        <Container>
            <Nav />
            <VideoSlider />
            {/* <LanguageSelector /> */}
            <HomeArticles />
            
        </Container>
    )
}

export default Home

const Container = styled.main`
    margin: auto;
    color: white;
    min-height: 100vh;
`
