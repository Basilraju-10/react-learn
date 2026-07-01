import { card } from "./Card.module.css"; 
export default function Card(props){
  return<div className={card}>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
}
