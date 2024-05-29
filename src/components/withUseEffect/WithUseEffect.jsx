import { useState, useEffect } from "react";
import "./with-use-effect.css";

export default function Namae() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  return (
    <>
      <h1>
        Source: {type}
      </h1>
      <button onClick={() => setType("users")} className="namae__btn">Users</button>
      <button onClick={() => setType("todos")} className="namae__btn">Todos</button>
      <button onClick={() => setType("posts")} className="namae__btn">Posts</button>

      <p className="useeffect__lucida-console">{JSON.stringify(data, null, 2)}</p>
    </>
  )
}