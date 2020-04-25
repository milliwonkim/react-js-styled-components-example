import React, { useState } from 'react';
import styled from 'styled-components';

import Switch from '@material-ui/core/Switch';

function Button({title, click}) {

    const [state, setState] = useState({
      checkedA: true,
      checkedB: true,
    });

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
      <Div>
        <ButtonColor>DARK</ButtonColor>
        <S.Button
            onClick={click}
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        >
            <h1>{title}</h1>
        </S.Button>
        <ButtonColor>LIGHT</ButtonColor>
      </Div>
    );
};

export default Button;

// ----------------------------------------------

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ButtonColor = styled.div`
    ${'' /* 테마 변경 컬러 지정 */}
    color: ${props => props.theme.colors.titleColor};
    font-family: 'Black Han Sans', sans-serif;
`;

const S = {};

S.Button = styled(Switch)`
    margin: 25px 10px 0 10px;
    margin: 0;
    width: 300px;
    height: 70px;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    span{
        font-size: 1.6rem;
        font-weight: bold;
    }
`;