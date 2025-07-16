import Img from "../../assets/img/baner2.jpg";
import TV from "../../assets/img/tv.jpg";
import Areamedica from "../../assets/img/areamedica.jpeg";
import Cadastro from "../../assets/img/cadastro.jpeg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className=" px-5 py-5">
        <div class="card bg-dark text-white">
          <img
            class="card-img"
            src={Img}
            style={{ width: "50%" }}
            alt="Imagem do card"
          />
          <div class="card-img-overlay container ">
            <h1 className="card-title fw-bold ">AVANTE TRIAGEM</h1>
            <p className="card-text fw-bolder ">
              Sistema de atendimento de pacientes, onde você pode cadastrar
              pacientes, gerenciar seus níveis de prioridade e status, e
              visualizar informações relevantes sobre cada paciente. - 🔴
              Vermelho nível grave - 🟡 Amarelo nível brando - 🟢 Verde nível
              leve
            </p>
          </div>
        </div>
        <div className=" py-5 container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <img className="card-img-top" src={TV} alt="TV" />
                <div className="card-body">
                  <h5 className="card-title">Área de TV</h5>
                  <p className="card-text">
                    Neste espaço, você poderá acompanhar o andamento do seu
                    atendimento, visualizar informações da triagem do paciente
                  </p>
                  <Link to={"/tv"} className="btn btn-primary">
                    TV
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={Areamedica}
                  alt="Área Médica"
                />
                <div className="card-body">
                  <h5 className="card-title">Área Médica</h5>
                  <p className="card-text">
                    Área Médica: neste espaço, os profissionais de saúde podem
                    gerenciar os pacientes, atualizar seus níveis de prioridade
                    e status, e registrar informações relevantes sobre cada
                    paciente.
                  </p>
                  <Link to={"areamedica"} className="btn btn-primary">
                    Área Médica
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100">
                <img className="card-img-top" src={Cadastro} alt="Cadastro" />
                <div className="card-body">
                  <h5 className="card-title">Área do Paciente</h5>
                  <p className="card-text">
                    Aqui você pode se cadastrar, e retitirar sua ficha.
                  </p>
                  <Link to={"cadastro"} className="btn btn-primary">
                    Cadastro
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
 
  
}

export default Home;
