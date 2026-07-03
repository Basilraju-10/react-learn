import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

  function Posts(){
    const [posts,setPosts]=useState([]);

    const fetchPosts = async() => {
         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
         const data = await res.json();
         setPosts(data);
    }
    useEffect(()=>{
       fetchPosts();
    }, []);
   
    return <div>
        <h1>Posts</h1>
        <Link to='/'>Home</Link>
        <hr/>
        <ol>
        {posts.map((p)=>
        <li><Link to={'${p.id}'}>{p.title}</Link></li>)}
        </ol>
        </div>;
}
export default Posts;