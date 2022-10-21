//Si funciona no lo muevan//
import { PieChart } from "react-chartkick";
import "chartkick/chart.js";
import "/src/view/css/grafica_bar_pas.css";

function Pastel1() {
  return (
    <PieChart
      download={true}
      data={[
        ["Blueberry", 44],
        ["Strawberry", 23],
        ["Banana", 22],
        ["Apple", 21],
        ["Grape", 13]
      ]}
    />
  );
}
function Pastel2() {
  return (
    <PieChart
      download={true}
      data={[
        ["Blueberry", 44],
        ["Strawberry", 23],
        ["Banana", 22],
        ["Apple", 21],
        ["Grape", 13]
      ]}
    />
  );
}

function Pastel3() {
  return (
    <PieChart
      download={true}
      data={[
        ["Blueberry", 44],
        ["Strawberry", 23],
        ["Banana", 22],
        ["Apple", 21],
        ["Grape", 13]
      ]}
    />
  );
}

function Pastel4() {
  return (
    <PieChart
      download={true}
      data={[
        ["Blueberry", 44],
        ["Strawberry", 23],
        ["Banana", 22],
        ["Apple", 21],
        ["Grape", 13]
      ]}
    />
  );
}

function GPastel() {
  return (
    <div>
      <div clasName="scroll-grafica">
        <div className="unionbarra">
          <div className="pastel1">
            <Pastel1 />
          </div>
          <div className="pastel2">
            <Pastel2 />
          </div>
        </div>
        <div className="unionbarra">
          <div className="pastel1">
            <Pastel3 />
          </div>
          <div className="pastel2">
            <Pastel4 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GPastel;
