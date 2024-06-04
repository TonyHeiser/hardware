import "./periodic-table-20.css"
import { FaArrowAltCircleRight, FaArrowAltCircleDown } from "react-icons/fa";

export default function PeriodicTable20() {
  return (
    <>
      <div className="periodic-table-20">
        <div className="periodic-table-20__first-row">
          <div className="periodic-table-20__titles">
            <div className="periodic-table-20__title right">
              <h4>Group</h4>
              <FaArrowAltCircleRight />

            </div>
            <div className="periodic-table-20__title down">
              <FaArrowAltCircleDown />
              <h4>Period</h4>
            </div>
          </div>
          <div className="periodic-table-20__groups">
            <span className="periodic-table-20__group">1</span>
            <span className="periodic-table-20__group">2</span>
            <span className="periodic-table-20__group">3</span>
            <span className="periodic-table-20__group">4</span>
            <span className="periodic-table-20__group">5</span>
            <span className="periodic-table-20__group">6</span>
            <span className="periodic-table-20__group">7</span>
            <span className="periodic-table-20__group">8</span>
            <span className="periodic-table-20__group">9</span>
            <span className="periodic-table-20__group">10</span>
            <span className="periodic-table-20__group">11</span>
            <span className="periodic-table-20__group">12</span>
            <span className="periodic-table-20__group">13</span>
            <span className="periodic-table-20__group">14</span>
            <span className="periodic-table-20__group">15</span>
            <span className="periodic-table-20__group">16</span>
            <span className="periodic-table-20__group">17</span>
            <span className="periodic-table-20__group">18</span>
          </div>
        </div>
        <div className="periodic-table-20__second-row">
          <span className="periodic-table-20__period">1</span>
        </div>
        <div className="periodic-table-20__third-row">
          <span className="periodic-table-20__period">2</span>
        </div>
        <div className="periodic-table-20__fourth-row">
          <span className="periodic-table-20__period">1</span>
        </div>
        <div className="periodic-table-20__fifth-row">
          <span className="periodic-table-20__period">2</span>
        </div>
        <div className="periodic-table-20__sixth-row">
          <span className="periodic-table-20__period">2</span>
        </div>
        <div className="periodic-table-20__seventh-row">
          <span className="periodic-table-20__period">2</span>
        </div>

      </div>
    
    </>
  )
}