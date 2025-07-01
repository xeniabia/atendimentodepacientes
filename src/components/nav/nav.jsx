import { NavLink } from "react-router-dom"

function Nav (){
    return (<>
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">

                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to={"/"} className={"nav-link"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"areamedica"} className={"nav-link"}>Área Médica</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"cadastro"} className={"nav-link"}>Cadastro</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</>)
        
        
}
export default Nav