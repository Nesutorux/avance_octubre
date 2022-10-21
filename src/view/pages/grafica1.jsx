//Si funciona no lo muevan//
import React from "react";
import "/src/view/css/grafica_bar_pas.css";
import { Buscador } from "/src/view/section/buscador.jsx";
import { Menus } from "/src/view/section/menu.jsx";
import { Accounts } from "/src/view/section/noti_men_config.jsx";

const LazyGBarra = React.lazy(() =>
  import("/src/view/section/grafica_barra.jsx")
);

function DashGrafica1() {
  return <Barras />;
}
//Generacion y Estructura del Dash
function Barras() {
  return (
    <div className="container-center-horizontal">
      <div className="dashboard-graphics screen">
        <div className="fondo">
          <div className="barmenu">
            <Menus />
          </div>
          <ul>
            <Seccion />
            <div className="areatrabajo">
              <AreaGraf1 />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
/*  
   Area generada en columnas para tener en una sola linea,
   el buscador, notificacion, mensajes, configuracion y perfil
*/
function Seccion() {
  return (
    <div className="unionup">
      <Buscador />
      <Accounts />
    </div>
  );
}
//Seccion de Area de Trabajo
function AreaGraf1() {
  return <LazyGBarra />;
}

export default DashGrafica1;
