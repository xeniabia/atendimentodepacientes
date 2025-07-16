import { NavLink } from "react-router-dom"
import { usePatientesStates } from "../../context/index.jsx";
import Logo from "../../assets/img/LOGO.png";
function Nav (){
    const { setPacientes } = usePatientesStates();
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-success bg-opacity-50 border-bottom">
            <div className="container-fluid container ">
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "150px", height: "auto" }}
              />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto fw-bolder">
                  <li className="nav-item fw-bolder ">
                    <NavLink to={"/"} className={"nav-link"}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item fw-bolder">
                    <NavLink to={"/tv"} className={"nav-link"}>
                      TV
                    </NavLink>
                  </li>
                  <li className="nav-item fw-bolder">
                    <NavLink to={"areamedica"} className={"nav-link"}>
                      Área Médica
                    </NavLink>
                  </li>
                  <li className="nav-item fw-bolder">
                    <NavLink to={"cadastro"} className={"nav-link"}>
                      Cadastro
                    </NavLink>
                  </li>
                  <li className="nav-item fw-bolder">
                    <button
                      className="btn btn-danger btn-sm rounded-circle ms-2"
                      title="Limpar dados"
                      onClick={() => {
                        localStorage.clear();
                        setPacientes([]);
                      }}
                    >
                      🗑️
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
        
        
}
export default Nav