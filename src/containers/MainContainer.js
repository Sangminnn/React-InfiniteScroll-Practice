import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Picture, ImageList } from 'components/Base/MyMain';
import gql from 'graphql-tag';
import { useQuery, useMutation } from "@apollo/react-hooks";

const GET_PICTURES = gql`
  query GetPictures {
    pictures @client {
      image
      title
    }
  }
`;

// pictures 의 인자로 object array가 들어와야하는데
// 이에 대한 type 설정을 gql을 사용해서 어떻게 해야할지?
// in react 에서 

// const LOAD_PICTURES = gql`
//   mutation LoadPictures($image: String, $title: String) {
//     pictures(image: $image, title: $title) {
//       image
//       title
//     }
//   }
// `;

function MainContainer() {

  const { data } = useQuery(GET_PICTURES);

  const [loadPictures] = useMutation(LOAD_PICTURES,
    {
    // update의 인자로 오는 data는 update mutation 이 적용된 data
    update(cache) {
      const newItems = cache.readQuery({ query: GET_PICTURES });
      cache.writeQuery({
        query: GET_PICTURES,
        data: { pictures: newItems }
      })
    }
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [target, setTarget] = useState(null);

  const [onload, setOnload] = useState(true);

  // const [pictures, setPictures] = useState([
  //   { image: 'prac4.jpg', title: 'hello'  },
  //   { image: 'prac2.jpg', title: 'hello'  },
  //   { image: 'prac5.jpg', title: 'hello'  },
  //   { image: 'prac4.jpg', title: 'hello'  },
  //   { image: 'prac6.jpg', title: 'hello'  },
  //   { image: 'prac2.jpg', title: 'hello'  },
  //   { image: 'prac1.jpg', title: 'hello'  },
  //   { image: 'prac2.jpg', title: 'hello'  },
  //   { image: 'prac4.jpg', title: 'hello'  },
  //   { image: 'prac5.jpg', title: 'hello'  },
  //   { image: 'prac2.jpg', title: 'hello'  },
  //   { image: 'prac6.jpg', title: 'hello'  },
  //   { image: 'prac3.jpg', title: 'hello'  },
  //   { image: 'prac5.jpg', title: 'hello'  },
  //   { image: 'prac2.jpg', title: 'hello'  },
  //   { image: 'prac1.jpg', title: 'hello'  },
  //   { image: 'prac4.jpg', title: 'hello'  },
  //   { image: 'prac3.jpg', title: 'hello'  },
  //   { image: 'prac2.jpg', title: 'hello'  },
  //   { image: 'prac6.jpg', title: 'hello'  },
  //   { image: 'prac3.jpg', title: 'hello'  },
    // { image: 'prac5.jpg', title: 'hello'  },
  // ]);

  // const addImage = () => {
  //   return setPictures([
  //     ...pictures,
  //     ...pictures
  //   ]);
  // };

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
      loadPictures();
      setOnload(true);
    }
  }
  

  // const pictureList = pictures.map(
  //   picture => (<Picture src={picture.image} title={picture.title}/>)
  // );

  // const pictureList = ({ loading, error, data }) => {
  //   if(loading) return <h4>loading. ..</h4>;
  //   if(error) return <h4>Error ...</h4>;

  //   return (
  //     data.picture.map(
  //       item => (<Picture src={item.image} title={item.title}/>)
  //     )
  //   )
  // }

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