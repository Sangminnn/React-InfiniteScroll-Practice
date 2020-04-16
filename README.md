## React 기반의 Infinite Scroll 구현 project


### 진행상황

간단한 layout을 만들어 grid-box로 image를 배치시키고 추후 프로젝트 진행시에 적용하고싶었던 기능들을 하나씩 넣어보는 중


### 2020.04.15

IntersectionObserver 에 대한 소개글을 보고 이를 적용

```js
// containers/MainContainer.js

const [target, setTarget] = useState(null);

// ...

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
  
  //  ...
  return (
    // ... 
    {onload && <Target ref={setTarget}></Target>}
  )
```

현재는 server단에서의 loading이 아니기 때문에 useState의 setState를 사용하여 교차 이벤트 발생 시에 addImage를 발생.

교차 이벤트 발생 포인트는 component들의 최하단에 target 을 두고 이를 toggle 하여 addImage 발생시에 다시 event listening 상태로 만들어 줌.

### 2020.04.16 

develop branch 를 만들어 공부하고있는 GraphQL 을 적용시켜봄.

Apollo Client와 GraphQL을 활용하면 Redux를 대체할 수 있다는 글을 보고, local state를 대체하기 위해 시도 중 ..

cache와 Query를 활용해 값을 불러오는 동작은 성공

Mutation을 통한 addImage 동작은 아직 진행중 ...
