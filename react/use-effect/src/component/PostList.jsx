import { useState, useEffect } from 'react';
// import Axios 

export default function PostList() {
  const [post, setPost] = useState('');

  
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setPost(json))

    }, [])
   

  /* useEffect(() => {
    const endPoint = 'https://jsonplaceholder.typicode.com/todos/1';
    Axios.get(endPoint).then((res) => {
      setPost(res.data);
    });
    console.log(post);
  }, []); */

  const [text, setText] = useState(false);

  const div = (
    <div>
      <p>
        {post.id}
        {post.userId}
      </p>
    </div>
  );

  return (
    <div>
      <p
        onClick={() => {
          setText(!text);
        }}
      >
        {post.title}
      </p>
      {text && div}
    </div>
  );
}
