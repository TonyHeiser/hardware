import "./periodic-table-20.css"
import { FaArrowAltCircleRight, FaArrowAltCircleDown } from "react-icons/fa";
import ChemicalElement from "./PeriodicTableElement.jsx";
import { elements } from "./periodic-table-data.js";
import ElementExpand from "./ElementExpand.jsx";

export default function PeriodicTable20() {

  return (
    <>
      <div className="periodic-table-20">
        {/* <ElementExpand element={elements.hydrogen}/> */}
        <table className="periodic-table-20__table">
          <tr className="periodic-table-20__groups">
            <th className="periodic-table-20__group-title">
              <h4>Group</h4>
              <FaArrowAltCircleRight/>
            </th>
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
          <tr className="periodic-table-20__periods">
            <th className="periodic-table-20__period-title">
              <FaArrowAltCircleDown/>
              <h4>Periods</h4>
            </th>
          </tr>
          <tr className="periodic-table-20__first-period">
            <th>1</th>
            <ChemicalElement element={elements.hydrogen}/>
            <td colSpan={16}></td>
            <ChemicalElement element={elements.helium}/>
          </tr>
          <tr className="periodic-table-20__second-period">
            <th>2</th>
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
          <tr className="periodic-table-20__third-period">
            <th>3</th>
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
          <tr className="periodic-table-20__fourth-period">
            <th>4</th>
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
          <tr className="periodic-table-20__fifth-period">
            <th>5</th>
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
          <tr className="periodic-table-20__sixth-period">
            <th>6</th>
            <ChemicalElement element={elements.caesium}/>
            <ChemicalElement element={elements.barium}/>
            <td className="td__lanthanide">Lanthanide</td>
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
          <tr className="periodic-table-20__seventh-period">
            <th>7</th>
            <ChemicalElement element={elements.francium}/>
            <ChemicalElement element={elements.radium}/>
            <td className="td__actinide">Actinide</td>
            <ChemicalElement element={elements.rutherfordium}/>
            <ChemicalElement element={elements.dubnium}/>
            <ChemicalElement element={elements.seaborgium}/>
            <ChemicalElement element={elements.bohrium}/>
            <ChemicalElement element={elements.hassium}/>
            <ChemicalElement element={elements.meitnerium}/>
            <ChemicalElement element={elements.darmstadtium}/>
            <ChemicalElement element={elements.roentgenium}/>
            <ChemicalElement element={elements.copernicium}/>
            <ChemicalElement element={elements.nihonium}/>
            <ChemicalElement element={elements.flerovium}/>
            <ChemicalElement element={elements.moscovium}/>
            <ChemicalElement element={elements.livermorium}/>
            <ChemicalElement element={elements.tennessine}/>
            <ChemicalElement element={elements.oganesson}/>
          </tr>
          <tr className="periodic-table-20__lanthanide">
            <th colSpan={4}>Lanthanide</th>
            <ChemicalElement element={elements.lantanium}/>
            <ChemicalElement element={elements.cerium}/>
            <ChemicalElement element={elements.praseodymium}/>
            <ChemicalElement element={elements.neodymium}/>
            <ChemicalElement element={elements.promethium}/>
            <ChemicalElement element={elements.samarium}/>
            <ChemicalElement element={elements.europium}/>
            <ChemicalElement element={elements.gadolinium}/>
            <ChemicalElement element={elements.terbium}/>
            <ChemicalElement element={elements.dysprosium}/>
            <ChemicalElement element={elements.holmium}/>
            <ChemicalElement element={elements.erbium}/>
            <ChemicalElement element={elements.thulium}/>
            <ChemicalElement element={elements.ytterbium}/>
            <ChemicalElement element={elements.lutetium}/>
          </tr>
          <tr className="periodic-table-20__actinide">
            <th colSpan={4}>Actinide</th>
            <ChemicalElement element={elements.actinium}/>
            <ChemicalElement element={elements.thorium}/>
            <ChemicalElement element={elements.protactinium}/>
            <ChemicalElement element={elements.uranium}/>
            <ChemicalElement element={elements.neptunium}/>
            <ChemicalElement element={elements.plutonium}/>
            <ChemicalElement element={elements.americium}/>
            <ChemicalElement element={elements.curium}/>
            <ChemicalElement element={elements.berkelium}/>
            <ChemicalElement element={elements.californium}/>
            <ChemicalElement element={elements.einsteinium}/>
            <ChemicalElement element={elements.fermium}/>
            <ChemicalElement element={elements.mendelevium}/>
            <ChemicalElement element={elements.nobelium}/>
            <ChemicalElement element={elements.lawrencium}/>
          </tr>
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