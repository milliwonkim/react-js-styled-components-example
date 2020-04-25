import React, { useState } from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 3px solid black;
    height: 100vh;
`

export default function Main() {

    const [toggle, setToggle] = useState(false);

    const toggleButton = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    return (
        <Div>
            <Dashboard />
            <Contact
                toggleButton={toggleButton}
                toggle={toggle}
            />
        </Div>
    )
}
