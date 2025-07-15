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
          <img class="card-img" src={Img} alt="Imagem do card" />
          <div class="card-img-overlay container ">
            <article className="p-5 justify-content-start align-items-start">
              <h1 className="card-title fw-bold ">AVANTE TRIAGEM</h1>
              <p className="card-text fw-bolder ">
                Sistema de atendimento de pacientes, onde você pode cadastrar
                pacientes, gerenciar seus níveis de prioridade e status, e
                visualizar informações relevantes sobre cada paciente. - 🔴
                Vermelho nível grave - 🟡 Amarelo nível brando - 🟢 Verde nível
                leve
              </p>
              <div className="container  py-5 ">
                <div class="card-group gap-4 ">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={TV}
                      alt="Imagem de capa do card"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Área de TV </h5>
                      <p className="card-text">
                        Neste espaço, você poderá acompanhar o andamento do seu
                        atendimento. Aqui são exibidos os pacientes que estão
                        sendo atendidos, os que estão aguardando na fila e os
                        que já foram atendidos. Assim, você pode visualizar sua
                        posição na fila e saber quando será chamado.
                      </p>

                      <Link to={"/tv"} className="btn btn-primary">
                        TV
                      </Link>
                    </div>
                  </div>
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={Areamedica}
                      alt="Imagem de capa do card"
                    />
                    <div class="card-body ">
                      <h5 class="card-title">Área Médica</h5>
                      <p className="card-text">
                        Área Médica: neste espaço, os profissionais de saúde
                        podem visualizar todos os pacientes cadastrados, definir
                        o nível de prioridade de cada um e acompanhar o status
                        do atendimento. É por aqui que médicos e equipe realizam
                        a triagem, atualizam informações e organizam o fluxo dos
                        atendimentos, garantindo que cada paciente seja atendido
                        conforme sua necessidade.
                      </p>

                      <Link to={"areamedica"} className="btn btn-primary">
                        Área Médica
                      </Link>
                    </div>
                  </div>
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={Cadastro}
                      alt="Imagem de capa do card"
                    />
                    <div class="card-body">
                      <h5 className="card-title">Área do Paciente</h5>
                      <p className="card-text">
                        Aqui você pode se cadastrar, acompanhar o andamento do
                        seu atendimento, ver sua posição na fila e acessar
                        informações importantes sobre seu histórico. Além disso,
                        é possível retirar sua ficha com todos os dados do
                        atendimento, que pode servir como comprovante ou
                        atestado médico, facilitando o acesso às informações
                      </p>

                      <Link to={"cadastro"} className="btn btn-primary">
                        Cadastro
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
 
  
}

export default Home;
