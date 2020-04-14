import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Picture, ImageList } from 'components/Base/MyMain';

function MainContainer() {
  const [target, setTarget] = useState(null);
  // const target = useRef(null);

  const [onload, setOnload] = useState(true);

  const [pictures, setPictures] = useState([
    { image: 'prac4.jpg', title: 'hello'  },
    { image: 'prac2.jpg', title: 'hello'  },
    { image: 'prac5.jpg', title: 'hello'  },
    { image: 'prac4.jpg', title: 'hello'  },
    { image: 'prac6.jpg', title: 'hello'  },
    { image: 'prac2.jpg', title: 'hello'  },
    { image: 'prac1.jpg', title: 'hello'  },
    { image: 'prac2.jpg', title: 'hello'  },
    { image: 'prac4.jpg', title: 'hello'  },
    { image: 'prac5.jpg', title: 'hello'  },
    { image: 'prac2.jpg', title: 'hello'  },
    { image: 'prac6.jpg', title: 'hello'  },
    { image: 'prac3.jpg', title: 'hello'  },
    { image: 'prac5.jpg', title: 'hello'  },
    { image: 'prac2.jpg', title: 'hello'  },
    { image: 'prac1.jpg', title: 'hello'  },
    { image: 'prac4.jpg', title: 'hello'  },
    { image: 'prac3.jpg', title: 'hello'  },
    { image: 'prac2.jpg', title: 'hello'  },
    { image: 'prac6.jpg', title: 'hello'  },
    { image: 'prac3.jpg', title: 'hello'  },
    { image: 'prac5.jpg', title: 'hello'  },
  ]);

  const addImage = () => {
    return setPictures([
      ...pictures,
      ...pictures
    ]);
  };

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
      addImage();
      setOnload(true);
    }
  }
  

  const pictureList = pictures.map(
    picture => (<Picture src={picture.image} title={picture.title}/>)
  );

  return (
    <>
      <ImageList>
        { pictureList }
      </ImageList>
      {onload && <Target ref={setTarget}></Target>}
    </>
  )
};

export default MainContainer;

const Target = styled.div``;