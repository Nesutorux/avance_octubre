//Si funciona no lo muevan//
import React from "react";
import "/src/view/css/registro.css";
import { Buscador } from "/src/view/section/buscador.jsx";
import { Menus } from "/src/view/section/menu.jsx";
import {
  AccountProfile,
  AccountMessage,
  AccountNotification
} from "/src/view/section/noti_men_config.jsx";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";
import { InputBase } from "@mui/material";
import { Radio } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";

function DashClientes() {
  return <Clientes />;
}

function Clientes() {
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
              <Areacliente />
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
      <AccountNotification />
      <AccountMessage />
      <AccountProfile />
    </div>
  );
}
//Seccion de Area de Trabajo
function Areacliente() {
  return (
    <div className="unionup">
      <div>
        <Typography variant="h4" className="txt1">
          Registro para Cliente
        </Typography>
        <br /> <br />
        <Typography variant="h4" className="txt2_1">
          Nombre de Usuario
        </Typography>
        <br />
        <div className="unionup">
          <Info1 />
          <Info2 />
        </div>
        <br />
        <Typography variant="h4" className="txt2_2">
          Nombre de Usuario
        </Typography>
        <br />
        <Info3 />
        <br />
        <Typography variant="h4" className="txt2_2">
          Nombre de Usuario
        </Typography>
        <br />
        <Info4 />
        <br />
        <Typography variant="h4" className="txt2_2">
          Nombre de Usuario
        </Typography>
        <br />
        <Info5 />
      </div>

      <div>
        <Typography variant="h4" className="txt3">
          Registro para Cliente
        </Typography>
        <Recordar />
        <Button
          onClick={() => (window.location.href = "/")}
          variant="contained"
          color="error"
          className="btnreg"
        >
          Ingresar
        </Button>
      </div>
    </div>
  );
}

function Recordar() {
  const [value, setValue] = React.useState("save");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
      className="rgrecord"
    >
      <FormControlLabel
        value="save"
        control={<Radio />}
        label="Recordar Contraseña"
      />
    </RadioGroup>
  );
}

//Informacion utilizada para el input
const InputName = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  backgroundColor: alpha(theme.palette.common.black, 0.12),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25)
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    width: 250
  }
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

const InputNames = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  backgroundColor: alpha(theme.palette.common.black, 0.12),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25)
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    width: 450
  }
}));
const StyledInputBases = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

//Mostrar mensaje para nombre
function Info1() {
  return (
    <InputName className="text">
      <StyledInputBase
        placeholder="Ingrese Nombre Usuario"
        inputProps={{ "aria-label": "search" }}
      />
    </InputName>
  );
}

function Info2() {
  return (
    <InputName className="text">
      <StyledInputBase
        placeholder="Ingrese Nombre Usuario"
        inputProps={{ "aria-label": "search" }}
      />
    </InputName>
  );
}

function Info3() {
  return (
    <InputNames className="text">
      <StyledInputBases
        placeholder="Ingrese Nombre Usuario"
        inputProps={{ "aria-label": "search" }}
      />
    </InputNames>
  );
}

function Info4() {
  return (
    <InputNames className="text">
      <StyledInputBases
        placeholder="Ingrese Nombre Usuario"
        inputProps={{ "aria-label": "search" }}
      />
    </InputNames>
  );
}
function Info5() {
  return (
    <InputNames className="text">
      <StyledInputBases
        placeholder="Ingrese Nombre Usuario"
        inputProps={{ "aria-label": "search" }}
      />
    </InputNames>
  );
}

export default DashClientes;
