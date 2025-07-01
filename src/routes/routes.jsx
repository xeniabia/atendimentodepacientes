import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "../components/nav/nav"


function RoutesNav(){
    return(<BrowserRouter>
    <Nav/>
        <Routes>
            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="areamedica" element={<h1>Área Médica</h1>}/>
            <Route path="cadastro"element={<h1>Cadastro</h1>}/>
        </Routes>
    </BrowserRouter>)
}

export default RoutesNav