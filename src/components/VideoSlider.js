import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
                <img src='https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg' alt='' />
            </Wrap>
            <Wrap>
                <img src='https://previews.123rf.com/images/andreysuslov/andreysuslov2007/andreysuslov200700001/151253943-concept-of-programming-coding-computer-software-program-development-technology-learning-create-web-a.jpg' alt='' />
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

    button{
        z-index: 1;
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
        transition-duration: 300ms;
        
        
    }

`
