import { useEffect, useRef, useState } from "react";
import Card from "./components/Card"
import Post from "./components/Post";


 export default function App() {
  const [loading,setLoading]= useState(true);
  const [posts, setPosts] = useState([]);

  const loadPosts = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  }

  useEffect(()=>{
  loadPosts();
  },[]);
  if(loading)return <h1>Loading...</h1>;
  return (
    <div>
      {posts.map((p)=> <Post key = {p.id} title={p.title} body={p.body}/>)}
    </div>
  )
}

