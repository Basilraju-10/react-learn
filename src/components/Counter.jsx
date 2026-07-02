import useCount from "../hooks/useCount";

export default function Counter(){
     const {count,setCount}= useCount();
   
    const increment = () =>{
        setCount(count+1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    )
}