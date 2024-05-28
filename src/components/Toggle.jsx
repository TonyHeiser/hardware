import { useState } from "react"
import "./toggle.css"

const classes = {
  title: "title-change",
  "title-change": "title-change2",
  "title-change2": "title-change3",
  "title-change3": "title"
}

export default function Toggle() {
  const [h1Tag, setH1Tag] = useState(classes.title);

  function handleClick() {
    setH1Tag(v => classes[v])
  }

  return (
    <div className="toggle__tag">
      <h1 className={h1Tag}>Toggle</h1>
      <button className="toggle__btn" onClick={handleClick}>Tap Here!</button>
    </div>
  )
}