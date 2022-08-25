import React from 'react';
import styled from 'styled-components';
import loginBg from '../images/login-background.jpg'; // import it if it's from src folder 

const Login = () => {
    return(
        <Container>
            <CTA>
                <CTALogoOne src={require(`../images/cta-logo-one.svg`).default} alt="logo one" />
                <SignUpButton>GET ALL THERE</SignUpButton>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee
                    with a Disney+ subscription. As of 25/08/22, the price of Disney+
                    and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src={require(`../images/cta-logo-two.png`).default} alt="logo two" />
            </CTA>
        </Container>
    )
};

export default Login;

// CSS STYLING

const Container = styled.div`
    height: calc(100vh - 70px);
    position: relative;
    display: flex;
    justify-content: center;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(rgba(0,0,0, 0.1), rgba(0,0,0, 0.1)), url(${loginBg});
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        background-attachment: fixed;
        z-index: -1;
    }
`;

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CTALogoOne = styled.img`

`;

const SignUpButton = styled.a`
    width: 100%;
    background-color: #108CD2;
    font-weight: bold;
    padding: 18px 0;
    color: white;
    letter-spacing: 3px;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    transition: all 0.25s ease;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    &:hover {
        background-color: #0066ff;
    }
`;

const Description = styled.p`
    font-size: 12px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    color: cyan;
`;

const CTALogoTwo = styled.img`
    width: 90%;
`;