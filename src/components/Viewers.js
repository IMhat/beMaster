import React from 'react';
import styled from 'styled-components';

const Viewers = () => {
    return(
        <Container>
            <Wrap>
                <img src={require(`../images/viewers-disney.png`).default} alt="viewer" />
                <video autoPlay loop muted src={require(`../videos/1564674844-disney.mp4`).default}></video>
            </Wrap>
            <Wrap>
                <img src={require(`../images/viewers-pixar.png`).default} alt="viewer" />
                <video autoPlay loop muted src={require(`../videos/1564676714-pixar.mp4`).default}></video>  
            </Wrap>
            <Wrap>
                <img src={require(`../images/viewers-national.png`).default} alt="viewer" />
                <video autoPlay loop muted src={require(`../videos/1564676296-national-geographic.mp4`).default}></video>
            </Wrap>
            <Wrap>
                <img src={require(`../images/viewers-marvel.png`).default} alt="viewer" />
                <video autoPlay loop muted src={require(`../videos/1564676115-marvel.mp4`).default}></video>
            </Wrap>
            <Wrap>
                <img src={require(`../images/viewers-starwars.png`).default} alt="viewer" />
                <video autoPlay loop muted src={require(`../videos/1608229455-star-wars.mp4`).default}></video>
            </Wrap>
        </Container>
    )
}

export default Viewers;

// CSS STYLING

const Container = styled.div`
    margin-top: 2.5rem;
    padding: 2.5rem 0;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    
    @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity .5s ease-in-out 0s;
        z-index: 2;
    }
    video {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        z-index: 1; 
    }
    &:hover {
        transform: scale(1.05);
        border-color: silver;
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        video {
            opacity: 1;
        }
        img {
            opacity: 0;
        }
`;