//Si funciona no lo muevan////Si funciona no lo muevan//
import React from "react";
import "/src/view/css/styles.css";
import logo from "/src/image/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#801313"
    }
  }
});

export function Menus() {
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <MInicio />
      <MProyecto />
      <MSeguimiento />
      <MGrafica1 />
      <MGrafica2 />
      <MClientes />
    </div>
  );
}
function MInicio() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color="primary"
        className="btninicio"
        startIcon={<HomeIcon />}
        onClick={() => (window.location.href = "/")}
      >
        Inicio
      </Button>
    </ThemeProvider>
  );
}

function MProyecto() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color="primary"
        className="btnmenu"
        startIcon={<AssignmentIndIcon />}
        onClick={() => (window.location.href = "/proyecto")}
      >
        Proyecto
      </Button>
    </ThemeProvider>
  );
}

function MSeguimiento() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color="primary"
        className="btnmenu"
        startIcon={<AssignmentIndIcon />}
        onClick={() => (window.location.href = "/seguimiento")}
      >
        Seguimiento
      </Button>
    </ThemeProvider>
  );
}
function MGrafica1() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color="primary"
        className="btnmenu"
        startIcon={<LeaderboardIcon />}
        onClick={() => (window.location.href = "/grafica1")}
      >
        Grafica 1
      </Button>
    </ThemeProvider>
  );
}
function MGrafica2() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color="primary"
        className="btnmenu"
        startIcon={<LeaderboardIcon />}
        onClick={() => (window.location.href = "/grafica2")}
      >
        Grafica 2
      </Button>
    </ThemeProvider>
  );
}
function MClientes() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color="primary"
        className="btnmenu"
        startIcon={<PersonAddIcon />}
        onClick={() => (window.location.href = "/anadirclientes")}
      >
        Clientes
      </Button>
    </ThemeProvider>
  );
}
