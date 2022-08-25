import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <Container>
            <Logo src={require(`../images/logo.svg`).default} alt="Logo" />
            <ListItems>
                <span>About Disney</span>
                <span>Careers</span>
                <span>Contact Us</span>
                <span>Disney® Premier Visa® Card</span>
                <span>Advertise With Us</span>
                <span>Privacy Policy</span>
                <span> Additional Content Information</span>
            </ListItems>
            <span>© Disney, All Rights Reserved, Disney Entertainment</span>
        </Container>
    )
};

export default Footer;

// CSS STYLING

const Container = styled.div`
    background: linear-gradient(180deg, #24235a, #39255a);
	display: flex;
    flex-direction: column;
	align-items: center;
    justify-content: center;
	padding: 1rem 3rem;
    font-size: 14px;
    color: cyan;
`;

const Logo = styled.img`
	width: 150px;
`;

const ListItems = styled.p`
    span {
        margin: 0 1.5rem;
        color: #1ce783;
    }
`;
