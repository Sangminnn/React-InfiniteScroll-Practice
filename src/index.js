import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import gql from 'graphql-tag';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();

const typeDefs = gql`
  type Query {
    pictures: [Picture]
  }

  type Mutation {
    LoadPictures(image: String, title: String): Picture
  }

  type Picture {
    __typename: String
    image: String
    tilte: String
  }
`

// const typeRe

// picture의 배열이라는 것을 암시

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000'
  }),
  typeDefs
});

cache.writeData({
  data: {
    // picture: { __typename: "Picture", image: 'prac6.jpg', title: 'hello'  },
    pictures: [
      { __typename: "Picture", image: 'prac4.jpg', title: 'hello'  },
      { __typename: "Picture", image: 'prac2.jpg', title: 'hello'  },
      { __typename: "Picture", image: 'prac5.jpg', title: 'hello'  },
      { __typename: "Picture", image: 'prac4.jpg', title: 'hello'  },
      { __typename: "Picture", image: 'prac6.jpg', title: 'hello'  },
    ]
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </ApolloProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
