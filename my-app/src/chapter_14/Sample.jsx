import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color: ${props => props.dark ? "white" : "dark"};
    background: ${props => props.dark ? "black" : "white"};
    border: 1px solid black;
`;

const Button2 = styled.button`
    color:grey;
    border:2px solid palevioletred;
`;

const RoundedButton = styled(Button2)`
    border-radius: 16px;
`;

function Sample(props) {
    return (
        <div>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
            <hr />
            <Button2>Normal</Button2>
            <RoundedButton>Normal</RoundedButton>
        </div>
    );

}

export default Sample;