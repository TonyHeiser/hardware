import "./periodic-table.css"
import { elements } from "./periodic-table-data"

export default function PeriodicTable() {
  return (
    <div className="periodic-table">
      <table className="periodic-table__table">
        <tr>Group
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
        <tr>
        </tr>
        <tr>Period</tr>
        <tr>1
          
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.hydrogen.char}</span>
                <span className="element__number span-text">{elements.hydrogen.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.hydrogen.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.hydrogen.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.hydrogen.nameRus}</span>
            </button>
          </th>
        </tr>
        <tr>2
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.lithium.char}</span>
                <span className="element__number span-text">{elements.lithium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">6.9</span>
                <span className="element__electronegativity span-text">0.98</span>
              </div>
              <span className="element__name span-text">Литий</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.beryllium.char}</span>
                <span className="element__number span-text">{elements.beryllium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.beryllium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.beryllium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.beryllium.nameRus}</span>
            </button>
          </th>
          
        </tr>
        <tr>3
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.sodium.char}</span>
                <span className="element__number span-text">{elements.sodium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.sodium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.sodium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.sodium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.magnesium.char}</span>
                <span className="element__number span-text">{elements.magnesium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.magnesium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.magnesium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.magnesium.nameRus}</span>
            </button>
          </th>
        </tr>
        <tr>4
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.potassium.char}</span>
                <span className="element__number span-text">{elements.potassium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.potassium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.potassium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.potassium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.calcium.char}</span>
                <span className="element__number span-text">{elements.calcium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.calcium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.calcium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.calcium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.scandium.char}</span>
                <span className="element__number span-text">{elements.scandium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.scandium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.scandium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.scandium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.titanium.char}</span>
                <span className="element__number span-text">{elements.titanium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.titanium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.titanium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.titanium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.vanadium.char}</span>
                <span className="element__number span-text">{elements.vanadium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.vanadium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.vanadium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.vanadium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.chromium.char}</span>
                <span className="element__number span-text">{elements.chromium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.chromium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.chromium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.chromium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.manganese.char}</span>
                <span className="element__number span-text">{elements.manganese.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.manganese.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.manganese.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.manganese.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.iron.char}</span>
                <span className="element__number span-text">{elements.iron.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.iron.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.iron.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.iron.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.cobalt.char}</span>
                <span className="element__number span-text">{elements.cobalt.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.cobalt.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.cobalt.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.cobalt.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.nickel.char}</span>
                <span className="element__number span-text">{elements.nickel.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.nickel.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.nickel.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.nickel.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.copper.char}</span>
                <span className="element__number span-text">{elements.copper.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.copper.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.copper.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.copper.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.zinc.char}</span>
                <span className="element__number span-text">{elements.zinc.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.zinc.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.zinc.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.zinc.nameRus}</span>
            </button>
          </th>
        </tr>
        <tr>5
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.rubidium.char}</span>
                <span className="element__number span-text">{elements.rubidium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.rubidium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.rubidium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.rubidium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.strontium.char}</span>
                <span className="element__number span-text">{elements.strontium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.strontium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.strontium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.strontium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.yttrium.char}</span>
                <span className="element__number span-text">{elements.yttrium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.yttrium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.yttrium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.yttrium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.zirconium.char}</span>
                <span className="element__number span-text">{elements.zirconium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.zirconium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.zirconium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.zirconium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.niobium.char}</span>
                <span className="element__number span-text">{elements.niobium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.niobium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.niobium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.niobium.nameRus}</span>
            </button>
          </th>
        </tr>
        <tr>6
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.caesium.char}</span>
                <span className="element__number span-text">{elements.caesium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.caesium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.caesium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.caesium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.barium.char}</span>
                <span className="element__number span-text">{elements.barium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.barium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.barium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.barium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button"><span className="lanthanide-actinide">Lanthanide</span></button>
          </th>
        </tr>
        <tr>7
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.francium.char}</span>
                <span className="element__number span-text">{elements.francium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.francium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.francium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.francium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.radium.char}</span>
                <span className="element__number span-text">{elements.radium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.radium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.radium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.radium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button"><span className="lanthanide-actinide">Actinide</span></button>
          </th>
        </tr>
        <tr>
          <th></th>
          <th colSpan={2}>Лантаноиды<br />(Lanthanide)</th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.lantanium.char}</span>
                <span className="element__number span-text">{elements.lantanium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.lantanium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.lantanium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.lantanium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.cerium.char}</span>
                <span className="element__number span-text">{elements.cerium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.cerium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.cerium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.cerium.nameRus}</span>
            </button>
          </th>
        </tr>
        <tr>
          <th></th>
          <th colSpan={2}>Актиноиды<br />(Actinide)</th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.actinium.char}</span>
                <span className="element__number span-text">{elements.actinium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.actinium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.actinium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.actinium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button">
              <div className="element-info__up">
                <span className="element__char span-text">{elements.thorium.char}</span>
                <span className="element__number span-text">{elements.thorium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.thorium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.thorium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.thorium.nameRus}</span>
            </button>
          </th>
        </tr>
      </table>
    </div>
  )
}