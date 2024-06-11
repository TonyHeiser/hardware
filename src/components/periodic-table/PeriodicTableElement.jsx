/* eslint-disable react/prop-types */
import "./element.css";


export default function ChemicalElement({element}) {

  return (
    <td>
      <button className={`periodic-table-20__btn ${element.group}`}>
        <div className="element20-info__up">
          <span className="element20__char span-text">{element.char}</span>
          <span className="element20__number span-text">{element.number}</span>
        </div>
        <div className="element20-info__center">
          <span className="element20__atomic-mass span-text">{element.atomicMass}</span>
          <span className="element20__electronegativity span-text">{element.electronegativity}</span>
        </div>
        <span className={`element20__name span-text ${element.fstyle}` }>{element.nameEng}</span>
      </button>
    </td>
  )
}

