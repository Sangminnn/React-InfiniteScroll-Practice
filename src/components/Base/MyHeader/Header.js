import React from 'react';
import styled from 'styled-components/macro';

const Positioner = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 14vh;
  margin: 0 4rem;
`;

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border-bottom: 1px solid black;
`;

const Logo = styled.div`
  font-size: 24px;
  letter-spacing: 2px;
`;

const Menu = styled.div`
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => (
  <Positioner>
    <HeadWrapper>
      <Logo>All about Space</Logo>
      <Menu>
        menu
      </Menu>
    </HeadWrapper>
  </Positioner>
);

export default Header;