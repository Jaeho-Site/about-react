// (1) 컴포넌트가 마운트될 때 fetch를 사용해 데이터를 비동기적으로 가져와요
// (2) Promise의 then 메서드를 사용해 데이터를 설정합니다.
// (3) 에러가 발생하면 catch 메서드를 통해 에러를 처리합니다.
import React, { useState, useEffect } from "react";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setPost(json))

  }, []);

  return <div>{post ? <div>{post.title}</div> : <div>Loading...</div>}</div>;
}

export default App;
