import React from 'react'
import styled from 'styled-components'
import VideoSlider from './VideoSlider'
import Articles from './Articles'

function Home() {
    return (
        <Container>
            <VideoSlider />
            <Articles />
        </Container>
    )
}

export default Home

const Container = styled.main`

`