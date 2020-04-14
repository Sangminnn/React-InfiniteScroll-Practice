import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60vh;
  
  @media only screen and (max-width: 768px) {
    height: 65vh;  
  }
`;

const Slogan = () => (
  <Wrapper>
    Lorem ipsum
  </Wrapper>
);

export default Slogan;