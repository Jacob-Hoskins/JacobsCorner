import React from 'react'
import styled from 'styled-components'
import VideoSlider from './VideoSlider'
import Articles from './Articles'

function Home() {
    return (
        <Container>
            <VideoSlider />
            <Articles title="Test title" date="1/4/22"/>
        </Container>
    )
}

export default Home

const Container = styled.main`

`