import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Icon } from "atomize";
import "/src/view/css/loading.css";
const LazyInicio = React.lazy(() => import("/src/view/pages/inicio.jsx"));
const LazyProyecto = React.lazy(() => import("/src/view/pages/proyecto.jsx"));
const LazySeguimiento = React.lazy(() =>
  import("/src/view/pages/seguimiento.jsx")
);
const LazyGrafica1 = React.lazy(() => import("/src/view/pages/grafica1.jsx"));
const LazyGrafica2 = React.lazy(() => import("/src/view/pages/grafica2.jsx"));
const LazyPerfil = React.lazy(() => import("/src/view/pages/perfil.jsx"));
const LazyLogin = React.lazy(() => import("/src/view/pages/login.jsx"));
const LazyRecover = React.lazy(() => import("/src/view/pages/recordar.jsx"));
const LazyClientes = React.lazy(() =>
  import("/src/view/pages/anadirclientes.jsx")
);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Pages />
  </StrictMode>
);

function Pages() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <React.Suspense
                fallback={
                  <Icon color="#641E16" name="Loading" className="loading" />
                }
              >
                <LazyInicio />
              </React.Suspense>
            }
          />
          <Route
            path="/proyecto"
            element={
              <React.Suspense
                fallback={
                  <Icon color="#641E16" name="Loading" className="loading" />
                }
              >
                <LazyProyecto />
              </React.Suspense>
            }
          />
          <Route
            path="/seguimiento"
            element={
              <React.Suspense
                fallback={
                  <Icon color="#641E16" name="Loading" className="loading" />
                }
              >
                <LazySeguimiento />
              </React.Suspense>
            }
          />
          <Route
            path="/grafica1"
            element={
              <React.Suspense
                fallback={
                  <Icon color="#641E16" name="Loading" className="loading" />
                }
              >
                <LazyGrafica1 />
              </React.Suspense>
            }
          />
          <Route
            path="/grafica2"
            element={
              <React.Suspense
                fallback={
                  <Icon color="#641E16" name="Loading" className="loading" />
                }
              >
                <LazyGrafica2 />
              </React.Suspense>
            }
          />
          <Route
            path="/perfil"
            element={
              <React.Suspense
                fallback={
                  <Icon color="#641E16" name="Loading" className="loading" />
                }
              >
                <LazyPerfil />{" "}
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <React.Suspense
                fallback={
                  <Icon color="#641E16" name="Loading" className="loading" />
                }
              >
                <LazyLogin />
              </React.Suspense>
            }
          />
          <Route
            path="/recordar"
            element={
              <React.Suspense
                fallback={
                  <Icon color="#641E16" name="Loading" className="loading" />
                }
              >
                <LazyRecover />
              </React.Suspense>
            }
          />
          <Route
            path="/anadirclientes"
            element={
              <React.Suspense
                fallback={
                  <Icon color="#641E16" name="Loading" className="loading" />
                }
              >
                <LazyClientes />
              </React.Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
