import "./element.css";
// import { elements } from "./periodic-table-data";

export default function ChemicalElement({element}) {

  const {group, char, number, atomicMass, electronegativity, nameEng} = element

  return (
    <button className={`periodic-table-20__btn ${element.group}`}>
      <div className="element20-info__up">
        <span className="element20__char span-text">{element.char}</span>
        <span className="element20__number span-text">{element.number}</span>
      </div>
      <div className="element20-info__center">
        <span className="element20__atomic-mass span-text">{element.atomicMass}</span>
        <span className="element20__electronegativity span-text">{element.electronegativity}</span>
      </div>
      <span className="element20__name span-text">{element.nameEng}</span>
    </button>
  )
}
