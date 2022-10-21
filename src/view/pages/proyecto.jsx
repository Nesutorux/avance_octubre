//Si funciona no lo muevan//
import React from "react";
import "/src/view/css/styles.css";
import { Buscador } from "/src/view/section/buscador.jsx";
import { Menus } from "/src/view/section/menu.jsx";
import { Accounts } from "/src/view/section/noti_men_config.jsx";

const LazyTablaProy = React.lazy(() =>
  import("/src/view/section/tabla_proyecto")
);

function DashProyecto() {
  return <AreaP />;
}
//Generacion y Estructura del Dash
function AreaP() {
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
              <Areatrabajo2 />
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
function Areatrabajo2() {
  return <LazyTablaProy />;
}

export default DashProyecto;
