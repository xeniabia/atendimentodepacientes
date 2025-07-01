import { NavLink } from "react-router-dom"

function Nav (){
    return (<><ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"areamedica"}>Área Médica</NavLink></li>
        <li><NavLink to={"cadastro"}>Cadastro</NavLink></li>
        
        </ul></>)
        
}
export default Nav