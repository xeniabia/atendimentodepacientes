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
            <article className="p-5">
              <h1 className="card-title fw-bold ">
                Sistema de Triagem de Pacientes
              </h1>
              <p className="card-text">
                Este é um card maior com suporte a texto embaixo, que funciona
                como uma introdução a um conteúdo adicional. Este conteúdo é um
                pouco maior, para demonstração.
              </p>
              <button className="btn btn-primary">
                <Link to={"cadastro"} className={"nav-link"}>
                  Cadastro
                </Link>
              </button>
            </article>
          </div>
        </div>
      </section>
      <section className="container align-items-center pb-5 ">
        <div class="card-group ">
          <div class="card">
            <img class="card-img-top" src={TV} alt="Imagem de capa do card" />
            <div class="card-body">
              <h5 class="card-title">Título do card</h5>
              <p class="card-text">
                Este é um card maior com suporte a texto embaixo, que funciona
                como uma introdução a um conteúdo adicional. Este conteúdo é um
                pouco maior, para demonstração.
              </p>
              <p class="card-text">
                <small class="text-muted">Atualizados 3 minutos atrás</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src={Areamedica}
              alt="Imagem de capa do card"
            />
            <div class="card-body">
              <h5 class="card-title">Título do card</h5>
              <p class="card-text">
                Este é um card com suporte a texto embaixo, que funciona como
                uma introdução a um conteúdo adicional.
              </p>
              <p class="card-text">
                <small class="text-muted">Atualizados 3 minutos atrás</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src={Cadastro}
              alt="Imagem de capa do card"
            />
            <div class="card-body">
              <h5 class="card-title">Título do card</h5>
              <p class="card-text">
                Este é um card maior com suporte a texto embaixo, que funciona
                como uma introdução a um conteúdo adicional. Este card tem o
                conteúdo ainda maior que o primeiro, para mostrar a altura
                igual, em ação.
              </p>
              <p class="card-text">
                <small class="text-muted">Atualizados 3 minutos atrás</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
 
  
}

export default Home;
