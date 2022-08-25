import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    // settings for the slider 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return(
        <Carousel {...settings}>
            <Wrap>
                <img src={require(`../images/slider-badag.jpg`).default} alt="cartoon" />
            </Wrap>
            <Wrap>
                <img src={require(`../images/slider-badging.jpg`).default} alt="cartoon" />
            </Wrap>
            <Wrap>
                <img src={require(`../images/slider-scale.jpg`).default} alt="cartoon" />
            </Wrap>
            <Wrap>
                <img src={require(`../images/slider-scales.jpg`).default} alt="cartoon" />
            </Wrap>
        </Carousel>
    )
};

export default ImageSlider;

// CSS STYLING (We are using Slider component from react-slick directly here, not in the html template)

const Carousel = styled(Slider)`
    margin-top: 0.5rem;

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: #ff1493;
        }
    }

    li.slick-active button:before {
        color: #ffffff;
    }

    .slick-prev:before,
    .slick-next:before {
        color: #ff1493;
    }
`;

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: .3s;
        width: 100%;
        height: 100%;
        &:hover {
            border: 4px solid silver;
        }
`;