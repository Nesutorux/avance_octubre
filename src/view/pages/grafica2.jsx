//Si funciona no lo muevan//
import React from "react";
import "/src/view/css/grafica_bar_pas.css";
import { Buscador } from "/src/view/section/buscador.jsx";
import { Menus } from "/src/view/section/menu.jsx";
import { Accounts } from "/src/view/section/noti_men_config.jsx";

const LazyGPastel = React.lazy(() =>
  import("/src/view/section/grafica_pastel.jsx")
);

function DashGrafica2() {
  return <Pastel />;
}
//Generacion y Estructura del Dash
function Pastel() {
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
              <AreaPas />
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
function AreaPas() {
  return <LazyGPastel />;
}

export default DashGrafica2;
