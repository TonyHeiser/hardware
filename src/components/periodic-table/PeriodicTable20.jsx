import "./periodic-table-20.css"
import { FaArrowAltCircleRight, FaArrowAltCircleDown } from "react-icons/fa";
import ChemicalElement from "./PeriodicTableElement.jsx";
import { elements } from "./periodic-table-data.js";

export default function PeriodicTable20() {
  return (
    <>
      <div className="periodic-table-20">
        <table className="periodic-table-20__table">
          <div className="periodic-table-20__first-row">
            <div className="periodic-table-20__group-period">
              <tr className="periodic-table-20__group">
                <th className="periodic-table-20__group-title">
                  <h4>Group</h4>
                  <FaArrowAltCircleRight/>
                </th>
              </tr>
              <tr className="periodic-table-20__period">
                <th className="periodic-table-20__period-title">
                  <FaArrowAltCircleDown/>
                  <h4>Period</h4>
                </th>
              </tr>
            </div>
            <tr className="periodic-table-20__group-nums">
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
            </tr>
          </div>
          <div className="periodic-table-20__periods">
            <tr className="periodic-table-20__first-row">
              <th className="periodic-table-20__periods-title">1</th>
              <ChemicalElement element={elements.hydrogen}/>
              <td colSpan={16}></td>
              <ChemicalElement element={elements.helium}/>
            </tr>
            <tr className="periodic-table-20__second-row">
              <th className="periodic-table-20__periods-title">2</th>
              <ChemicalElement element={elements.lithium}/>
              <ChemicalElement element={elements.beryllium}/>
              <td colSpan={10}></td>
              <ChemicalElement element={elements.boron}/>
              <ChemicalElement element={elements.carbon}/>
              <ChemicalElement element={elements.nitrogen}/>
              <ChemicalElement element={elements.oxygen}/>
              <ChemicalElement element={elements.fluorine}/>
              <ChemicalElement element={elements.neon}/>
            </tr>
            <tr className="periodic-table-20__third-row"> 
              <th className="periodic-table-20__periods-title">3</th>
              <ChemicalElement element={elements.sodium}/>
              <ChemicalElement element={elements.magnesium}/>
              <td colSpan={10}></td>
              <ChemicalElement element={elements.aluminum}/>
              <ChemicalElement element={elements.silicon}/>
              <ChemicalElement element={elements.phosphorus}/>
              <ChemicalElement element={elements.sulfur}/>
              <ChemicalElement element={elements.chlorine}/>
              <ChemicalElement element={elements.argon}/>
            </tr>
            <tr className="periodic-table-20__fourth-row">
              <th className="periodic-table-20__periods-title">4</th>
              <ChemicalElement element={elements.potassium}/>
              <ChemicalElement element={elements.calcium}/>
              <ChemicalElement element={elements.scandium}/>
              <ChemicalElement element={elements.titanium}/>
              <ChemicalElement element={elements.vanadium}/>
              <ChemicalElement element={elements.chromium}/>
              <ChemicalElement element={elements.manganese}/>
              <ChemicalElement element={elements.iron}/>
              <ChemicalElement element={elements.cobalt}/>
              <ChemicalElement element={elements.nickel}/>
              <ChemicalElement element={elements.copper}/>
              <ChemicalElement element={elements.zinc}/>
              <ChemicalElement element={elements.gallium}/>
              <ChemicalElement element={elements.germanium}/>
              <ChemicalElement element={elements.arsenic}/>
              <ChemicalElement element={elements.selenium}/>
              <ChemicalElement element={elements.bromine}/>
              <ChemicalElement element={elements.krypton}/>
            </tr>
            <tr className="periodic-table-20__fifth-row">
              <th className="periodic-table-20__periods-title">5</th>
              <ChemicalElement element={elements.rubidium}/>
              <ChemicalElement element={elements.strontium}/>
              <ChemicalElement element={elements.yttrium}/>
              <ChemicalElement element={elements.zirconium}/>
              <ChemicalElement element={elements.niobium}/>
              <ChemicalElement element={elements.molybdenum}/>
              <ChemicalElement element={elements.technetium}/>
              <ChemicalElement element={elements.ruthenium}/>
              <ChemicalElement element={elements.rhodium}/>
              <ChemicalElement element={elements.palladium}/>
              <ChemicalElement element={elements.silver}/>
              <ChemicalElement element={elements.cadmium}/>
              <ChemicalElement element={elements.indium}/>
              <ChemicalElement element={elements.tin}/>
              <ChemicalElement element={elements.antimony}/>
              <ChemicalElement element={elements.tellurium}/>
              <ChemicalElement element={elements.iodine}/>
              <ChemicalElement element={elements.xenon}/>
            </tr>
            <tr className="periodic-table-20__sixth-row">
              <th className="periodic-table-20__periods-title">6</th>
              <ChemicalElement element={elements.caesium}/>
              <ChemicalElement element={elements.barium}/>
              <td colSpan={1}></td>
              <ChemicalElement element={elements.hafnium}/>
              <ChemicalElement element={elements.tantalum}/>
              <ChemicalElement element={elements.tungsten}/>
              <ChemicalElement element={elements.rhenium}/>
              <ChemicalElement element={elements.osmium}/>
              <ChemicalElement element={elements.iridium}/>
              <ChemicalElement element={elements.platinum}/>
              <ChemicalElement element={elements.gold}/>
              <ChemicalElement element={elements.mercury}/>
              <ChemicalElement element={elements.thallium}/>
              <ChemicalElement element={elements.lead}/>
              <ChemicalElement element={elements.bismuth}/>
              <ChemicalElement element={elements.polonium}/>
              <ChemicalElement element={elements.astatine}/>
              <ChemicalElement element={elements.radon}/>
            </tr>
          </div>
        </table>
        {/* <div className="periodic-table-20__first-row">
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
          <div className="second-row__elements">
            <ChemicalElement element={elements.hydrogen}/>
            <ChemicalElement element={elements.helium}/>
          </div>
        </div>
        <div className="periodic-table-20__third-row">
          <span className="periodic-table-20__period">2</span>
        </div>
        <div className="periodic-table-20__fourth-row">
          <span className="periodic-table-20__period">3</span>
        </div>
        <div className="periodic-table-20__fifth-row">
          <span className="periodic-table-20__period">4</span>
        </div>
        <div className="periodic-table-20__sixth-row">
          <span className="periodic-table-20__period">5</span>
        </div>
        <div className="periodic-table-20__seventh-row">
          <span className="periodic-table-20__period">6</span>
        </div>
        <div className="periodic-table-20__eighth-row">
          <span className="periodic-table-20__period">7</span>
        </div> */}

      </div>
    
    </>
  )
}