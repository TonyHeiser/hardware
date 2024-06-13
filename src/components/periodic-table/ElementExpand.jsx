/* eslint-disable react/prop-types */

import "./element-expand.css"
import { IoMdClose } from "react-icons/io";

export default function ElementExpand({element, closeExpand}) {
  return (
    <div className="element-expand">
      <div className="element-expand__under-expand" onClick={() => closeExpand(false)}></div>
      <div className="element-expand__container">
        <div className="element-expand__header">
          <h1 className="element-expand__title">{element.name}</h1>
          <button className="element-expand__close-btn" onClick={() => closeExpand(false)}>
            <IoMdClose/>
          </button>
        </div>
        <div className="element-expand__flex">
          <div className="element-expand__parameters">
            <p className="element-expand__atomic-mass">Atomic Mass:</p>
            <p className="element-expand__melting-point">Melting Point (K, °C, °F):</p>
            <p className="element-expand__boiling-point">Boiling Point (K, °C, °F): </p>
          </div>
          <div className="element-expand__values">
            <p className="element-expand__atomic-mass">{element.atomicMass}</p>
            <p className="element-expand__melting-point">{element.meltingPointK}, {element.meltingPointC}, {element.meltingPointF}</p>
            <p className="element-expand__boiling-point">{element.boilingPointK}, {element.boilingPointC}, {element.boilingPointF}</p>
          </div>
        </div>
        <p className="element-expand__info-text">{element.info}</p>
      </div>
    </div>
  )
}