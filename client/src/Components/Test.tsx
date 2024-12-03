import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Test: React.FC = () => {
  const [post, setPost]=useState<{title: string}>({title: ''}); 
  const [id, setId]=useState("");
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((respose)=>{
        setPost(respose.data);
    })
        .catch((error)=>{console.log(error)});
    }, [id]
    );
  return (
    <div>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
        <h1>{post.title}</h1>
    </div>
  );
};

export default Test;
