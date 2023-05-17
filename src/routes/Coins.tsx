import React from 'react';
import styled from 'styled-components';

const Title = styled.h1 `
  color: ${props => props.theme.accentColor}
`

function Coins() {
    return (
        <div>
            <Title>coins</Title>
        </div>
    );
}

export default Coins;