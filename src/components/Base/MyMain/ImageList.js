import React from 'react';
import styled from 'styled-components';

const GridBox = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 36px;

  margin: 5rem;

  @media (max-width: 1200px) {
    margin: 2rem;
    grid-gap: 36px;
  }

  @media (max-width: 990px) {
    margin: 1.25rem;
  }
`;

const ImageList = ({ children }) => (
  <GridBox>
    { children }
  </GridBox>
);

export default ImageList;