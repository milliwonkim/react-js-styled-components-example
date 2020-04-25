import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopDiv = styled.div`
    position: sticky;
    top: 10px;
`;

const Div = styled.div`
    background: ${props => props.theme.colors.navColor};
    padding: 10px;
    font-size: 30px;
    font-family: 'Black Han Sans', sans-serif;
    color: ${props => props.theme.colors.titleColor};
    border: 3px solid ${props => props.theme.colors.borderColor};
    position: sticky;
    width: 750px;
    top: 10px;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
`;

const Div2 = styled.div`
    font-family: 'Black Han Sans', sans-serif;
    background: ${props => props.theme.colors.navColor};
    font-size: 30px;
    position: sticky;
    width: 750px;
    top: 10px;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    float: right;
    border: 3px solid ${props => props.theme.colors.borderColor};
    z-index: 3;
    padding: 10px;
    margin: 10px;
`;

const Div3 = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

const Div4 = styled.div`
    ${'' /* border: 3px solid black; */}
    display: flex;
    justify-content: center;
    color: ${props => props.theme.colors.titleColor};
    cursor: pointer;
`;

const Div5 = styled.div`
    margin: 0 10px;
    color: ${props => props.theme.colors.titleColor};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.titleColor};
`;

export default function Navbar() {

    const [toggle, setToggle] = useState(false);

    const toggleButton = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    return (
        <TopDiv>
            {
                toggle === false ? (
                    <Div onClick={toggleButton}>TOGGLE</Div>
                ) : null
            }
            {
                toggle ? (
                    <Div2>
                        <Div3>
                            <Div5 class="li">
                                <StyledLink to="/">HOME</StyledLink>
                            </Div5>
                            <Div5 class="li">
                                <StyledLink to="/dashboard">DASHBOARD</StyledLink>
                            </Div5>
                            <Div5 class="li">
                                <StyledLink to="/about">ABOUT</StyledLink>
                            </Div5>
                            <Div5 class="li">
                                <StyledLink to="/contact">CONTACT</StyledLink>
                            </Div5>
                        </Div3>
                        <Div3>
                            <Div4 onClick={toggleButton}>X</Div4>
                        </Div3>
                    </Div2>
                ) : null
            }
        </TopDiv>
    )
}
