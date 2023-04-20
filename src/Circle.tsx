import React from 'react';
import styled from 'styled-components';

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: ${props => props.bgColor};
`

interface ContainerProps {
    bgColor:string;

}

interface CircleProps {
    bgColor:string;
}

function Circle({bgColor}: CircleProps) { 
    //CircleProps 안에 bgColor가 들어있을 것임을 알려주는 것
    return (
        <Container bgColor={bgColor}/>
    );
}

export default Circle;

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerobj : PlayerShape) => 
    `Hello ${playerobj.name} you are ${playerobj.age} years old`;


