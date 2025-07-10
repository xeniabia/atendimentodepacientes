import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/nav/nav.jsx";
import AreaMedica from "../pages/areamedica/areamedica.jsx";
import Home from "../pages/home/home.jsx";
import Cadastro from "../pages/cadastro/cadastro.jsx";
import { PatientesStatesProvider } from "../context/index.jsx";

function RoutesNav() {
  return (
    <BrowserRouter>
      <PatientesStatesProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="areamedica" element={<AreaMedica />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Routes>
      </PatientesStatesProvider>
    </BrowserRouter>
  );
}

export default RoutesNav;
