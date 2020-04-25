import React from 'react';
import styled from 'styled-components';
import './App.css';

const Div = styled.div`
    ${'' /* border: 10px solid black; */}
    width: 90vw;
    font-size: 30px;
    letter-spacing: 3px;
    z-index: 1;
    border-radius: 15px;
    margin: 5px;
    font-family: 'Bangers', cursive;
    color: ${props => props.theme.colors.titleColor}
`;

export default function Header({theme}) {
    return (
        <Div>
            <h1>Why Nobody Sleep This Deep Night?</h1>
        </Div>
    )
}