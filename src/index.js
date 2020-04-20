import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import gql from 'graphql-tag';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();

const typeDefs = gql`
  type Picture {
    __typename: String!
    image: String!
    title: String!
  }

  type Query {
    pictures: [Picture!]!
  }

  type Mutation {
    addPicture(input: [Picture]): [Picture]!
  }
`;


const resolvers = {
  Mutation: {
    addPicture: (_, args, { cache }) => {
      
      const newthing = [
        { __typename: "Picture", image: 'prac1.jpg', title: 'hello'  },
        { __typename: "Picture", image: 'prac2.jpg', title: 'hello'  },
        { __typename: "Picture", image: 'prac3.jpg', title: 'hello'  },
        { __typename: "Picture", image: 'prac4.jpg', title: 'hello'  },
        { __typename: "Picture", image: 'prac5.jpg', title: 'hello'  },
        { __typename: "Picture", image: 'prac6.jpg', title: 'hello'  }
      ];

      const query = gql`
        query pictures {
          pictures @client {
            __typename
            image
            title
          }
        }
      `

      const previous = cache.readQuery({ query });
      const data = {
        pictures: [...previous.pictures, ...newthing]
      }

      cache.writeQuery({ query, data });
      return data;
    }
    // addPicture: (_, variables, { cache }) => {
      // const query = gql`
      //   query pictures {
      //     pictures @client {
      //       __typename
      //       image
      //       title
      //     }
      //   }
      // `

      // const previous = cache.readQuery({ query });
      // const newPicture = { __typename, image, title };
      // const data = {
      //   pictures: [...previous.pictures, newPicture]
      // }
      
      // cache.writeQuery({ query, data })
      // return newPicture;
    // }
  }
};

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000'
  }),
  typeDefs,
  resolvers
});

cache.writeData({
  data: {
    pictures: [
      { __typename: "Picture", image: 'prac4.jpg', title: 'hello'  },
      { __typename: "Picture", image: 'prac2.jpg', title: 'hello'  },
      { __typename: "Picture", image: 'prac5.jpg', title: 'hello'  },
      { __typename: "Picture", image: 'prac4.jpg', title: 'hello'  },
      { __typename: "Picture", image: 'prac6.jpg', title: 'hello'  },
      { __typename: "Picture", image: 'prac6.jpg', title: 'hello'  }
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
