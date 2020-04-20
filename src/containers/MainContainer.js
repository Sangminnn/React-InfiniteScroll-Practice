import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Picture, ImageList } from 'components/Base/MyMain';
import gql from 'graphql-tag';
import { useQuery, useMutation } from "@apollo/react-hooks";

const GET_PICTURES = gql`
  query getPictures {
    pictures @client {  
      image
      title
    }
  }
`;

// __typename: $__typename, image: $image, title: $title
const ADD_PICTURES = gql`
  mutation addPicture {
    addPicture @client {
      __typename
      image
      title
    }
  }
`;

// case 2
// const ADD_PICTURES = gql`
//   mutation addPicture($__typename: __typename, $image: image, $title: title) {
//     addPicture(__typename: $__typename, image: $image, title: $title) @client {
//       image
//       title
//     }
//   }
// `;

function MainContainer() {

  const { data } = useQuery(GET_PICTURES);

  const [addPicture] = useMutation(ADD_PICTURES);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [target, setTarget] = useState(null);

  const [onload, setOnload] = useState(true);


  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
  }, [target]);

  const onIntersect = ([ entry ]) => {
    if(entry.isIntersecting) {
      setOnload(false);
      addPicture();
      setOnload(true);
    }
  }

  return (
    <>
      <ImageList>
        {data.pictures.map(
          picture => (<Picture src={picture.image} title={picture.title}/>)
        )}
      </ImageList>
      {onload && <Target ref={setTarget}></Target>}
    </>
  )
};

export default MainContainer;

const Target = styled.div``;