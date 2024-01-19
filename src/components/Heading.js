import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
    margin-bottom: 3rem;
    margin-top: 3rem;
    color: #9ebeef ;
    text-shadow: 0 0 5px #433aa8, 3px -1px 5px #271c6c;
`;

const Heading = () => {
  return (
    <div>
        <Title>Our travel agency is <br/>
        all about story telling and experience !</Title>
    </div>
  )
}

export default Heading
