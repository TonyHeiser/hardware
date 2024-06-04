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
          <th className="th__protactinium-span-fs">
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
          <th>
            <button className="periodic-table__button" id={elements.hafnium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.hafnium.char}</span>
                <span className="element__number span-text">{elements.hafnium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.hafnium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.hafnium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.hafnium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.tantalum.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.tantalum.char}</span>
                <span className="element__number span-text">{elements.tantalum.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.tantalum.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.tantalum.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.tantalum.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.tungsten.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.tungsten.char}</span>
                <span className="element__number span-text">{elements.tungsten.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.tungsten.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.tungsten.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.tungsten.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.rhenium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.rhenium.char}</span>
                <span className="element__number span-text">{elements.rhenium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.rhenium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.rhenium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.rhenium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.osmium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.osmium.char}</span>
                <span className="element__number span-text">{elements.osmium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.osmium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.osmium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.osmium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.iridium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.iridium.char}</span>
                <span className="element__number span-text">{elements.iridium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.iridium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.iridium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.iridium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.platinum.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.platinum.char}</span>
                <span className="element__number span-text">{elements.platinum.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.platinum.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.platinum.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.platinum.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.gold.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.gold.char}</span>
                <span className="element__number span-text">{elements.gold.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.gold.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.gold.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.gold.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.mercury.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.mercury.char}</span>
                <span className="element__number span-text">{elements.mercury.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.mercury.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.mercury.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.mercury.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.thallium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.thallium.char}</span>
                <span className="element__number span-text">{elements.thallium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.thallium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.thallium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.thallium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.lead.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.lead.char}</span>
                <span className="element__number span-text">{elements.lead.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.lead.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.lead.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.lead.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.bismuth.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.bismuth.char}</span>
                <span className="element__number span-text">{elements.bismuth.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.bismuth.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.bismuth.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.bismuth.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.polonium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.polonium.char}</span>
                <span className="element__number span-text">{elements.polonium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.polonium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.polonium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.polonium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.astatine.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.astatine.char}</span>
                <span className="element__number span-text">{elements.astatine.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.astatine.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.astatine.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.astatine.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.radon.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.radon.char}</span>
                <span className="element__number span-text">{elements.radon.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.radon.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.radon.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.radon.nameRus}</span>
            </button>
          </th>
        </tr>
        <tr>7
          <th>
            <button className="periodic-table__button" id={elements.francium.group}>
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
            <button className="periodic-table__button" id={elements.radium.group}>
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
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.rutherfordium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.rutherfordium.char}</span>
                <span className="element__number span-text">{elements.rutherfordium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.rutherfordium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.rutherfordium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.rutherfordium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.dubnium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.dubnium.char}</span>
                <span className="element__number span-text">{elements.dubnium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.dubnium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.dubnium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.dubnium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.seaborgium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.seaborgium.char}</span>
                <span className="element__number span-text">{elements.seaborgium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.seaborgium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.seaborgium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.seaborgium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.bohrium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.bohrium.char}</span>
                <span className="element__number span-text">{elements.bohrium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.bohrium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.bohrium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.bohrium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.hassium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.hassium.char}</span>
                <span className="element__number span-text">{elements.hassium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.hassium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.hassium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.hassium.nameRus}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.meitnerium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.meitnerium.char}</span>
                <span className="element__number span-text">{elements.meitnerium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.meitnerium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.meitnerium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.meitnerium.nameRus}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.darmstadtium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.darmstadtium.char}</span>
                <span className="element__number span-text">{elements.darmstadtium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.darmstadtium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.darmstadtium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.darmstadtium.nameRus}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.roentgenium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.roentgenium.char}</span>
                <span className="element__number span-text">{elements.roentgenium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.roentgenium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.roentgenium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.roentgenium.nameRus}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.copernicium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.copernicium.char}</span>
                <span className="element__number span-text">{elements.copernicium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.copernicium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.copernicium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.copernicium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.nihonium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.nihonium.char}</span>
                <span className="element__number span-text">{elements.nihonium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.nihonium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.nihonium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.nihonium.nameEng}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.flerovium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.flerovium.char}</span>
                <span className="element__number span-text">{elements.flerovium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.flerovium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.flerovium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.flerovium.nameEng}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.moscovium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.moscovium.char}</span>
                <span className="element__number span-text">{elements.moscovium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.moscovium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.moscovium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.moscovium.nameEng}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.livermorium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.livermorium.char}</span>
                <span className="element__number span-text">{elements.livermorium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.livermorium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.livermorium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.livermorium.nameEng}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.tennessine.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.tennessine.char}</span>
                <span className="element__number span-text">{elements.tennessine.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.tennessine.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.tennessine.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.tennessine.nameEng}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.oganesson.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.oganesson.char}</span>
                <span className="element__number span-text">{elements.oganesson.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.oganesson.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.oganesson.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.oganesson.nameEng}</span>
            </button>
          </th>
        </tr>
        <tr>
          <th colSpan={2}></th>
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
          <th className="th__protactinium-span-fs">
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
          <th className="th__protactinium-span-fs">
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
          <th>
            <button className="periodic-table__button" id={elements.thulium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.thulium.char}</span>
                <span className="element__number span-text">{elements.thulium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.thulium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.thulium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.thulium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.ytterbium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.ytterbium.char}</span>
                <span className="element__number span-text">{elements.ytterbium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.ytterbium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.ytterbium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.ytterbium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.lutetium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.lutetium.char}</span>
                <span className="element__number span-text">{elements.lutetium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.lutetium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.lutetium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.lutetium.nameRus}</span>
            </button>
          </th>
        </tr>
        <tr>
          <th colSpan={2}></th>
          <th colSpan={2}>Актиноиды<br />(Actinide)</th>
          <th>
            <button className="periodic-table__button" id={elements.actinium.group}>
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
            <button className="periodic-table__button" id={elements.actinium.group}>
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
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.protactinium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.protactinium.char}</span>
                <span className="element__number span-text">{elements.protactinium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.protactinium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.protactinium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.protactinium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.uranium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.uranium.char}</span>
                <span className="element__number span-text">{elements.uranium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.uranium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.uranium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.uranium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.neptunium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.neptunium.char}</span>
                <span className="element__number span-text">{elements.neptunium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.neptunium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.neptunium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.neptunium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.plutonium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.plutonium.char}</span>
                <span className="element__number span-text">{elements.plutonium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.plutonium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.plutonium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.plutonium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.americium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.americium.char}</span>
                <span className="element__number span-text">{elements.americium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.americium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.americium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.americium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.curium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.curium.char}</span>
                <span className="element__number span-text">{elements.curium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.curium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.curium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.curium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.berkelium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.berkelium.char}</span>
                <span className="element__number span-text">{elements.berkelium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.berkelium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.berkelium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.berkelium.nameRus}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.californium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.californium.char}</span>
                <span className="element__number span-text">{elements.californium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.californium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.californium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.californium.nameRus}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.einsteinium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.einsteinium.char}</span>
                <span className="element__number span-text">{elements.einsteinium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.einsteinium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.einsteinium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.einsteinium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.fermium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.fermium.char}</span>
                <span className="element__number span-text">{elements.fermium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.fermium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.fermium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.fermium.nameRus}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.mendelevium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.mendelevium.char}</span>
                <span className="element__number span-text">{elements.mendelevium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.mendelevium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.mendelevium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.mendelevium.nameRus}</span>
            </button>
          </th>
          <th>
            <button className="periodic-table__button" id={elements.nobelium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.nobelium.char}</span>
                <span className="element__number span-text">{elements.nobelium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.nobelium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.nobelium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.nobelium.nameRus}</span>
            </button>
          </th>
          <th className="th__protactinium-span-fs">
            <button className="periodic-table__button" id={elements.lawrencium.group}>
              <div className="element-info__up">
                <span className="element__char span-text">{elements.lawrencium.char}</span>
                <span className="element__number span-text">{elements.lawrencium.number}</span>
              </div>
              <div className="element-info__center">
                <span className="element__atomic-mass span-text">{elements.lawrencium.atomicMass}</span>
                <span className="element__electronegativity span-text">{elements.lawrencium.electronegativity}</span>
              </div>
              <span className="element__name span-text">{elements.lawrencium.nameRus}</span>
            </button>
          </th>
        </tr>
      </table>
    </div>
  )
}