import React, { useState } from 'react';
import styled from 'styled-components';

export default function Dashboard({theme}) {

    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setList(list.concat(text));

        if (text!=='') setText('');
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const removeItem = (index) => {
        const temp = list;
        temp.splice(index,1);
        setList(temp)

    }

    console.log(list);

    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <Input value={text} onChange={e => handleChange(e)} placeholder="Write Things" />
                <Div3>
                    <Button>ADD</Button>
                </Div3>
                <Div>
                    {
                        list.map((item, index) => {
                            if(item) {
                                return (
                                    <Div2>
                                        <Div5>
                                            <Div6>
                                                {item}
                                            </Div6>
                                        </Div5>
                                        <Button onClick={() => removeItem(index)}>
                                            REMOVE
                                        </Button>
                                    </Div2>
                                )
                            }
                        })
                    }
                </Div>
            </form>
        </>
    )
}

// --------------------------------------------------------

const Div = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        overflow: scroll;
        box-sizing: border-box;
    }
`;

const Input = styled.input`
    ${'' /* margin: 20px 0; */}
    outline-style: none;
    border: 3px solid ${props => props.theme.colors.borderColor};
    background: ${props => props.theme.colors.bgColor};
    color: ${props => props.theme.colors.titleColor};
    border-radius: 0;
    text-align: center;
    font-size: 20px;
    height: 50px;
    width: 760px;
    font-family: 'Black Han Sans', sans-serif;
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid ${props => props.theme.colors.borderColor};
    color: ${props => props.theme.colors.borderColor};
    border-radius: 10px;
    margin: 10px;
    width: 370px;
    height: 370px;
    &:hover {
        transform: scale(1.02);
        cursor: pointer;
        z-index: 1;
        position: relative;
    }
`;

const Div3 = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 10px;
`;

const Button = styled.button`
    outline-style: none;
    font-family: 'Black Han Sans', sans-serif;
    background: ${props => props.theme.colors.bgColor};
    border: 3px solid ${props => props.theme.colors.borderColor};
    cursor: pointer;
    color: ${props => props.theme.colors.borderColor};
    margin: 0 10px;
    padding: 10px;
    border-radius: 10px;
    &:hover {
        transform: scale(1.02);
        background: ${props => props.theme.colors.hoverColor}
    }
`;

const Div5 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    height: 295px;
    border: 3px solid ${props => props.theme.colors.borderColor};
    border-radius: 10px;
    color: ${props => props.theme.colors.borderColor};
    font-family: 'Black Han Sans', sans-serif;
    background-image: url("https://source.unsplash.com/random");
`;

const Div6 = styled.div`
    font-size: 30px;
`;