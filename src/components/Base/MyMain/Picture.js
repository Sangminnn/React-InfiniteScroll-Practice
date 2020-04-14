import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;  

  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 600px) {
    height: auto;
  }
`;

// const Wrapper = styled.div`
//   display: flex;
//   align-self: center;
//   position: relative;

//   margin: 3rem;
//   min-width: 408px;
//   max-width: 480px;

//   overflow: hidden;

//   cursor: pointer;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 4px;

//   font-size: 20px;
//   color: white;  

//   -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
//   -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
//   box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);

//   transition: 0.5s all;
  
//   :hover {
//     transform: scale(1.1);
//   }

//   // :hover {
//   //   // -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.4);
//   //   // -moz-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.4);
//   //   // box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.4);  
//   // }
// `;

// const Title = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

const Picture = ({ src, title }) => (
  <Wrapper>
    <Image src={src} />
    {/* <Title> */}
      { title }
    {/* </Title> */}
  </Wrapper>
);

export default Picture;