import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Hero>
            <h2>Copyright &copy; 2021. All Rights Reserved</h2>
        </Hero>
    )
};

const Hero = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    h2{
        font-weight: 500;
    }
    @media screen and (max-width: 680px){
        h2{
            font-size: 1.3rem;
        }
    }
`;

export default Footer
