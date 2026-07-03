import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
    const [post,setPosts]=useState()
    const {id} = useParams();
    
        const fetchPost = async() => {
             const res = await fetch('https://jsonplaceholder.typicode.com/posts/ ${id}');
             const data = await res.json();
             console.log(data)
             setPosts(data);
        }
        useEffect(()=>{
           fetchPost();
        }, []);

        if(!post){
            return <div>Loading...</div>
        }
       return(
    <div>
        <h1>{post.title}</h1>
        <Link to='Posts'>Back</Link> 
        <hr/>
        <p>{post.body}</p>
    </div>
  )
}
