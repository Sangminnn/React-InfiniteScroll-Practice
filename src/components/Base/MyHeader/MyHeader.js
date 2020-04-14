import React from 'react';
import styled from 'styled-components';
import { Header, Slogan } from 'components/Base/MyHeader';

const Wrapper = styled.div`
  background-image: url("https://images.hdqwalls.com/wallpapers/monochrome-hallway-architecture.jpg");
  // background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5wB-pa80K9YPV4iqRrBQFyIXaB04xSXH4BZNQd1D3bzYAftgF");
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
`;

const MyHeader = () => (
  <Wrapper>
    <Header />
    <Slogan />
  </Wrapper>
);

export default MyHeader;