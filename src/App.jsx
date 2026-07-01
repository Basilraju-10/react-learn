import { useEffect, useState } from "react";
import Card from "./components/Card"



 export default function App() {
const data = {
  kerala : "thiruvanathapuram",
  karanataka : "bengaluru",
  tamilnadu : "chennai",
}
const [selectedState, setSelectedState] = useState("Kerala")
const [selectedStateCapital, setSelectedStateCaptial] = useState("Trivanathapuram")
const changeState =(e) => {
    setSelexportectedState(e.target.value);
}
const changeCapital = () =>{
    setSelectedStateCaptial(data[selectedState]);
}
useEffect(changeCapital,[selectedState])

  return (
    <div>
      <select onChange = {changeState}>
        <option value="kerala"> Kerala</option>
        <option value="karanataka">Karnataka</option>
        <option value="tamilnadu">Tamilnadu</option>
      </select>
      <p>"selected state is: {selectedState}"</p>
      <p>"selected state capital is: {selectedStateCapital}"</p>
      
      
    </div>
  )
}

