
import useCount from "../hooks/useCount"

export default function card() {
  const {count}= useCount();
  return(
    <div>
      <h1>My Card</h1>
      <hr />
      <p>current count is:{count} </p>
    </div>
  )
}