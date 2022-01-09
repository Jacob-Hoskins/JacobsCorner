import React from 'react'
import styled from 'styled-components'
import VideoSlider from '../components/VideoSlider'
import Articles from '../Pages/Articles'
import Nav from '../components/Nav'

function Home() {
    return (
        <Container>
            <Nav />
            <VideoSlider />
            <Articles title="Test title" date="1/4/22"/>
            
        </Container>
    )
}

export default Home

const Container = styled.main`

`
