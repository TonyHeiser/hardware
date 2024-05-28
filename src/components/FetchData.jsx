import { useState } from "react";
import "./fetch-data.css"

export default function FetchData() {
  const [users, setUsers] = useState("");

  async function getData() {
    const url = "https://jsonplaceholder.typicode.com/users/1"
    const response = await fetch(url);
    setUsers(response)
  }

  return (
    <>
      <pre>{JSON.stringify(users)}</pre>
      <button onClick={getData} className="get-data-btn">Get users</button>
    </>
  )
}