import React from 'react';
import { Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { MyHeader } from 'components/Base/MyHeader';
import { MainContainer } from 'containers';

import { Home } from 'pages';
// import HeaderContainer 

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    background: #f1f1f5;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <MyHeader />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
