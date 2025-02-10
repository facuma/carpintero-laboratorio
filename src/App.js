import "./App.css";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import Casosexito from "./components/Casosexito";
import Countdown from "./components/Countdown";
import DetallesCurso from "./components/DetallesCurso";
import Hero from "./components/Hero";
import PreInscripcion from "./components/PreInscripcion";
import Testimonios from "./components/Testimonios";
import Footer from "./components/Footer";
import  Links  from "./components/Links";


function App() {
  return (
    <BrowserRouter>
      <div className="App text-gray-800 background-main">
      <head>
        <title>Escuela de Carpinteros de Laboratorio</title> 
        <meta name="description" content="Aprende carpintería de laboratorio con nuestro curso online. ¡Inscríbete ahora!" />
        <link rel="icon" href="/favicon.ico" /> 
        <meta property="og:title" content="Carpintería de Laboratorio - ¡Inscríbete ahora!" />
        <meta property="og:description" content="Domina el arte de la madera y crea tus propios proyectos." />
        <meta property="og:image" content="/banner.jpg" /> 
        <meta property="og:url" content="https://tu-sitio-web.com/" /> 
      </head>

        <Routes>
          <Route
            path="/curso" // Mover los componentes a la ruta /curso
            element={
              <>
                <Hero />
                <Testimonios />
                <DetallesCurso />
                <Casosexito />
                <Countdown />
                <PreInscripcion />
              </>
            }
          />
          <Route
            path="/links"
            element={
              <div>
                <Links/>
              </div>
            }
          />
      
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;