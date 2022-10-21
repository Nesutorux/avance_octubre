//Si funciona no lo muevan//
import { ColumnChart } from "react-chartkick";
import "chartkick/chart.js";
import "/src/view/css/grafica_bar_pas.css";

function Barra1() {
  return (
    <ColumnChart
      data={[
        ["Sun", 32],
        ["Mon", 46],
        ["Tue", 56],
        ["Wed", 21],
        ["Thu", 20],
        ["Fri", 13],
        ["Sat", 27]
      ]}
      colors={[
        "#FF2D00",
        "#00FF04",
        "#008FFF",
        "#FFF300",
        "#5100FF",
        "#FB00FF",
        "#8E8E8E"
      ]}
      height="300px"
      width="400px"
      download={true}
    />
  );
}

function Barra2() {
  return (
    <ColumnChart
      data={[
        ["Sun", 32],
        ["Mon", 46],
        ["Tue", 56],
        ["Wed", 21],
        ["Thu", 20],
        ["Fri", 13],
        ["Sat", 27]
      ]}
      colors={["#b00", "#666"]}
      height="300px"
      width="400px"
      download={true}
    />
  );
}

function Barra3() {
  return (
    <ColumnChart
      data={[
        ["Sun", 32],
        ["Mon", 46],
        ["Tue", 56],
        ["Wed", 21],
        ["Thu", 20],
        ["Fri", 13],
        ["Sat", 27]
      ]}
      colors={["#b00", "#666"]}
      height="300px"
      width="400px"
      download={true}
    />
  );
}
function Barra4() {
  return (
    <ColumnChart
      data={[
        ["Sun", 32],
        ["Mon", 46],
        ["Tue", 56],
        ["Wed", 21],
        ["Thu", 20],
        ["Fri", 13],
        ["Sat", 27]
      ]}
      colors={[
        "#FF2D00",
        "#00FF04",
        "#008FFF",
        "#FFF300",
        "#5100FF",
        "#FB00FF",
        "#8E8E8E"
      ]}
      height="300px"
      width="400px"
      download={true}
    />
  );
}

function GBarra() {
  return (
    <div>
      <div clasName="scroll-grafica">
        <div className="unionbarra">
          <div className="barra1">
            <Barra1 />
          </div>
          <div className="barra2">
            <Barra2 />
          </div>
        </div>
        <div className="unionbarra">
          <div className="barra1">
            <Barra3 />
          </div>
          <div className="barra2">
            <Barra4 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GBarra();
