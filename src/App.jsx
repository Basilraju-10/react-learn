import Card from "./components/Card"
import Counter from "./components/Counter";
import CountContext from "./context/CountContext";
import CountProvider from "./providers/CountProvider";

 export default function App() {
   
  return (
    <div>
      <Counter />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

