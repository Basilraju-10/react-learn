import { useRef, useState } from "react";
import Card from "./components/Card"


 export default function App() {
  const numberRef = useRef();
  const [fact,setFact] = useState();
  const [loading,setLoading] = useState(false);

  const getFact = async() => {
    setLoading(true)
    const number = numberRef.current.value
const response = await fetch('https://catfact.ninja/fact')
    const text = await response.text()
    setLoading(false)
    setFact(text)
  }
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div>
      <input ref={numberRef} type="number" placeholder="Enter Number"/>
      <button onClick={getFact}>Get Fact</button>
      <p>{fact}</p>
    </div>
  )
}

