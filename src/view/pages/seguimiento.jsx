//Si funciona no lo muevan//
import React from "react";
import "/src/view/css/tablas_pro_seg.css";
import { Buscador } from "/src/view/section/buscador.jsx";
import { Menus } from "/src/view/section/menu.jsx";
import { Accounts } from "/src/view/section/noti_men_config.jsx";

const LazyTablaSeg = React.lazy(() =>
  import("/src/view/section/tabla_seguimiento.jsx")
);

function DashSeguimiento() {
  return <StatusCl />;
}
//Generacion y Estructura del Dash
function StatusCl() {
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
              <AreaS />
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

function AreaS() {
  return <LazyTablaSeg />;
}

export default DashSeguimiento;
