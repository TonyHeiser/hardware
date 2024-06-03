import "./periodic-table.css"
import { elements } from "./periodic-table-data"

export default function PeriodicTable() {
  return (
    <div className="periodic-table">
      <div className="explanation">
        <div className="explanation__element">
          <div className="element-info__up">
            <span className="element__char span-text">{elements.hydrogen.char}</span>
            <span className="element__number span-text">{elements.hydrogen.number}</span>
          </div>
          <div className="element-info__center">
            <span className="element__atomic-mass span-text">{elements.hydrogen.atomicMass}</span>
            <span className="element__electronegativity span-text">{elements.hydrogen.electronegativity}</span>
          </div>
          <span className="element__name span-text">{elements.hydrogen.nameRus}</span>
        </div>
        <div className="dashes">
          <div className="dash__name">
            <span className="dash__char-info">Символ элемента</span>
            <div className="dash1 dashez"></div>
          </div>
          <div className="dash__number">
            <span className="dash__number-info">Номер элемента</span>
            <div className="dash2 dashez"></div>
          </div>
          <div className="dash__atomic-mass">
            <span className="dash__atomic-mass-info">Относительная атомная масса</span>
            <div className="dash3 dashez"></div>
          </div>
          <div className="dash__electronegativity">
            <span className="dash__electronegativity-info">Электроотрицательность</span>
            <div className="dash4 dashez"></div>
          </div>
          <div className="dash__element-name">
            <span className="dash__element-name-info">Название элемента</span>
            <div className="dash5 dashez"></div>
          </div>
        </div>
      </div>
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
            <button className="periodic-table__button" id={elements.hydrogen.group}>
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
          <th colSpan={16}></th>
          <th>
            <button className="periodic-table__button" id={elements.helium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.helium.char}</span>
                <span className="element__number span-text">{elements.helium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.helium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.helium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.helium.nameRus}</span>
            </button>
          </th>
          
        </tr>
        <tr>2
          <th>
            <button className="periodic-table__button" id={elements.lithium.group}>
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
            <button className="periodic-table__button" id={elements.beryllium.group}>
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
          <th colSpan={10}></th>
          <th>
            <button className="periodic-table__button" id={elements.boron.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.boron.char}</span>
                <span className="element__number span-text">{elements.boron.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.boron.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.boron.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.boron.nameRus}</span>
            </button>
          </th>          
          <th>
            <button className="periodic-table__button" id={elements.carbon.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.carbon.char}</span>
                <span className="element__number span-text">{elements.carbon.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.carbon.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.carbon.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.carbon.nameRus}</span>
            </button>
          </th>          
          <th>
            <button className="periodic-table__button" id={elements.nitrogen.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.nitrogen.char}</span>
                <span className="element__number span-text">{elements.nitrogen.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.nitrogen.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.nitrogen.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.nitrogen.nameRus}</span>
            </button>
          </th>          
          <th>
            <button className="periodic-table__button" id={elements.oxygen.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.oxygen.char}</span>
                <span className="element__number span-text">{elements.oxygen.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.oxygen.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.oxygen.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.oxygen.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.fluorine.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.fluorine.char}</span>
                <span className="element__number span-text">{elements.fluorine.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.fluorine.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.fluorine.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.fluorine.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.neon.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.neon.char}</span>
                <span className="element__number span-text">{elements.neon.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.neon.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.neon.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.neon.nameRus}</span>
            </button>
          </th>
          
        </tr>
        <tr>3
          <th>
            <button className="periodic-table__button" id={elements.sodium.group}>
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
            <button className="periodic-table__button" id={elements.magnesium.group}>
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
          <th colSpan={10}></th>
          <th>
            <button className="periodic-table__button" id={elements.aluminum.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.aluminum.char}</span>
                <span className="element__number span-text">{elements.aluminum.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.aluminum.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.aluminum.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.aluminum.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.silicon.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.silicon.char}</span>
                <span className="element__number span-text">{elements.silicon.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.silicon.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.silicon.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.silicon.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.phosphorus.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.phosphorus.char}</span>
                <span className="element__number span-text">{elements.phosphorus.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.phosphorus.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.phosphorus.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.phosphorus.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.sulfur.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.sulfur.char}</span>
                <span className="element__number span-text">{elements.sulfur.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.sulfur.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.sulfur.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.sulfur.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.chlorine.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.chlorine.char}</span>
                <span className="element__number span-text">{elements.chlorine.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.chlorine.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.chlorine.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.chlorine.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.argon.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.argon.char}</span>
                <span className="element__number span-text">{elements.argon.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.argon.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.argon.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.argon.nameRus}</span>
            </button>
          </th>
        </tr>
        <tr>4
          <th>
            <button className="periodic-table__button" id={elements.potassium.group}>
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
            <button className="periodic-table__button" id={elements.calcium.group}>
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
            <button className="periodic-table__button" id={elements.scandium.group}>
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
            <button className="periodic-table__button" id={elements.titanium.group}>
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
            <button className="periodic-table__button" id={elements.vanadium.group}>
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
            <button className="periodic-table__button" id={elements.chromium.group}>
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
            <button className="periodic-table__button" id={elements.manganese.group}>
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
            <button className="periodic-table__button" id={elements.iron.group}>
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
            <button className="periodic-table__button" id={elements.cobalt.group}>
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
            <button className="periodic-table__button" id={elements.nickel.group}>
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
            <button className="periodic-table__button" id={elements.copper.group}>
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
            <button className="periodic-table__button" id={elements.zinc.group}>
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
          <th>
            <button className="periodic-table__button" id={elements.gallium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.gallium.char}</span>
                <span className="element__number span-text">{elements.gallium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.gallium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.gallium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.gallium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.germanium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.germanium.char}</span>
                <span className="element__number span-text">{elements.germanium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.germanium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.germanium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.germanium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.arsenic.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.arsenic.char}</span>
                <span className="element__number span-text">{elements.arsenic.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.arsenic.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.arsenic.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.arsenic.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.selenium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.selenium.char}</span>
                <span className="element__number span-text">{elements.selenium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.selenium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.selenium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.selenium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.bromine.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.bromine.char}</span>
                <span className="element__number span-text">{elements.bromine.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.bromine.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.bromine.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.bromine.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.krypton.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.krypton.char}</span>
                <span className="element__number span-text">{elements.krypton.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.krypton.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.krypton.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.krypton.nameRus}</span>
            </button>
          </th>
        </tr>
        <tr>5
          <th>
            <button className="periodic-table__button" id={elements.rubidium.group}>
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
            <button className="periodic-table__button" id={elements.strontium.group}>
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
            <button className="periodic-table__button" id={elements.yttrium.group}>
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
            <button className="periodic-table__button" id={elements.zirconium.group}>
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
            <button className="periodic-table__button" id={elements.niobium.group}>
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
          <th>
            <button className="periodic-table__button" id={elements.molybdenum.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.molybdenum.char}</span>
                <span className="element__number span-text">{elements.molybdenum.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.molybdenum.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.molybdenum.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.molybdenum.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.technetium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.technetium.char}</span>
                <span className="element__number span-text">{elements.technetium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.technetium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.technetium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.technetium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.ruthenium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.ruthenium.char}</span>
                <span className="element__number span-text">{elements.ruthenium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.ruthenium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.ruthenium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.ruthenium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.rhodium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.rhodium.char}</span>
                <span className="element__number span-text">{elements.rhodium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.rhodium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.rhodium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.rhodium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.palladium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.palladium.char}</span>
                <span className="element__number span-text">{elements.palladium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.palladium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.palladium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.palladium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.silver.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.silver.char}</span>
                <span className="element__number span-text">{elements.silver.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.silver.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.silver.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.silver.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.cadmium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.cadmium.char}</span>
                <span className="element__number span-text">{elements.cadmium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.cadmium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.cadmium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.cadmium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.indium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.indium.char}</span>
                <span className="element__number span-text">{elements.indium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.indium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.indium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.indium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.tin.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.tin.char}</span>
                <span className="element__number span-text">{elements.tin.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.tin.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.tin.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.tin.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.antimony.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.antimony.char}</span>
                <span className="element__number span-text">{elements.antimony.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.antimony.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.antimony.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.antimony.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.tellurium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.tellurium.char}</span>
                <span className="element__number span-text">{elements.tellurium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.tellurium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.tellurium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.tellurium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.iodine.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.iodine.char}</span>
                <span className="element__number span-text">{elements.iodine.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.iodine.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.iodine.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.iodine.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.xenon.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.xenon.char}</span>
                <span className="element__number span-text">{elements.xenon.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.xenon.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.xenon.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.xenon.nameRus}</span>
            </button>
          </th>
          
        </tr>
        <tr>6
          <th>
            <button className="periodic-table__button" id={elements.caesium.group}>
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
            <button className="periodic-table__button" id={elements.barium.group}>
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
            <button className="periodic-table__button" id={elements.lantanium.group}>
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
            <button className="periodic-table__button" id={elements.cerium.group}>
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
          <th>
            <button className="periodic-table__button" id={elements.praseodymium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.praseodymium.char}</span>
                <span className="element__number span-text">{elements.praseodymium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.praseodymium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.praseodymium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.praseodymium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.neodymium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.neodymium.char}</span>
                <span className="element__number span-text">{elements.neodymium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.neodymium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.neodymium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.neodymium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.promethium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.promethium.char}</span>
                <span className="element__number span-text">{elements.promethium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.promethium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.promethium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.promethium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.samarium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.samarium.char}</span>
                <span className="element__number span-text">{elements.samarium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.samarium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.samarium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.samarium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.europium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.europium.char}</span>
                <span className="element__number span-text">{elements.europium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.europium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.europium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.europium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.gadolinium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.gadolinium.char}</span>
                <span className="element__number span-text">{elements.gadolinium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.gadolinium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.gadolinium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.gadolinium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.terbium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.terbium.char}</span>
                <span className="element__number span-text">{elements.terbium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.terbium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.terbium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.terbium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.dysprosium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.dysprosium.char}</span>
                <span className="element__number span-text">{elements.dysprosium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.dysprosium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.dysprosium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.dysprosium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.holmium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.holmium.char}</span>
                <span className="element__number span-text">{elements.holmium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.holmium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.holmium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.holmium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.erbium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.erbium.char}</span>
                <span className="element__number span-text">{elements.erbium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.erbium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.erbium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.erbium.nameRus}</span>
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