import React from 'react';
import styled from 'styled-components';
import bg from '../images/home-background.jpg'; // import it if it's from src folder 
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';

const Home = () => {
    return(
        <Container>
            <ImageSlider />
            <Viewers />
            <Movies />
        </Container>
    )
};

export default Home;

// CSS STYLING

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 1rem calc(3.5vw - 5px);
    position: relative;
    overflow-x: hidden;
    &:before {
        content: "";
        ${'' /* fall-back color */}
        background: linear-gradient(30deg, #370c25, #101953); 
        ${'' /* background-image: url('/home-background.jpg'); */}
        ${'' /* this is if it's image path from the public folder  */}
        background-image: url(${bg});
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        background-attachment: fixed;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    } 
`;
