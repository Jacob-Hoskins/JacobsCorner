import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


function VideoSlider() {
    let settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <Link to='/pythonBasics'><img src='../Pictures/PythonBasics.jpg' alt='' /> </Link>
            </Wrap>
            <Wrap>
                <Link to='/pyLoops'><img src='../Pictures/Loops.jpg' alt='' /></Link>
            </Wrap>
        </Carousel>
    )
}

export default VideoSlider

const Carousel = styled(Slider)`
    height: 100vh;
    margin: 0;
    padding: 20px;
    diplay: flex;
    overflow: hidden;
    
    .slick-list{
        overflow: visible;
    }

    

`

const Wrap = styled.div`
    cursor: pointer;
    

    img{
        width: 100%;
        max-height: 50vh;
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 200ms;
        
        
    }

`
