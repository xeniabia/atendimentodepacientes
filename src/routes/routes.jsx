import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/nav/nav.jsx";
import AreaMedica from "../pages/areamedica/areamedica.jsx";
import Home from "../pages/home/home.jsx";
import Cadastro from "../pages/cadastro/cadastro.jsx";

function RoutesNav() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="areamedica" element={<AreaMedica/>} />
        <Route path="cadastro" element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesNav;
