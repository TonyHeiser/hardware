/* eslint-disable react/prop-types */

import "./element-expand.css"
import { IoMdClose } from "react-icons/io";

export default function ElementExpand({element, closeExpand}) {
  return (
    <div className="element-expand">
      <div className="element-expand__under-expand" onClick={() => closeExpand(false)}></div>
      <div className="element-expand__container">
        <div className="element-expand__header">
          <h1 className="element-expand__title">{element.nameEng}</h1>
          <button className="element-expand__close-btn" onClick={() => closeExpand(false)}>
            <IoMdClose/>
          </button>
        </div>
        <div className="element-expand__flex">
          <div className="element-expand__parameters">
            <p className="element-expand__latin-name">Latin name:</p>
            <p className="element-expand__atomic-mass">Atomic Mass:</p>
            { element.electronegativity != null && <p className="element-expand__electronegativity">Electronegativity:</p> }
            { element.meltingPointK != null && <p className="element-expand__melting-point">Melting Point (K, °C, °F):</p> }
            { element.boilingPointK != null && <p className="element-expand__boiling-point">Boiling Point (K, °C, °F): </p> }
            <p className="element-expand__standart-state">Standart State:</p>
          </div>
          <div className="element-expand__values">
            <p className="element-expand__latin-name">{element.latinName}</p>
            <p className="element-expand__atomic-mass">{element.atomicMass}</p>
            { element.electronegativity != null && <p className="element-expand__electronegativity">{element.electronegativity}</p> }
            { element.meltingPointK != null && <p className="element-expand__melting-point">{element.meltingPointK} K, {element.meltingPointC}°C, {element.meltingPointF}°F</p> }
            { element.boilingPointK != null && <p className="element-expand__boiling-point">{element.boilingPointK} K, {element.boilingPointC}°C, {element.boilingPointF}°F</p> }
            <p className="element-expand__standart-state">{element.standartState}</p>
          </div>
        </div>
        <p className="element-expand__info-text">{element.info}</p>
        <div className="element-expand__next-previous">
          <button className="element-expand__previous">Previous</button>
          <button className="element-expand__next">Next</button>
        </div>
      </div>
    </div>
  )
}