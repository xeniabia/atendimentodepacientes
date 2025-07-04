import { usePatientesStates } from "../../context";
import ListTV from "../../components/Tv/List";
import CardTV from "../../components/Tv/Card";

function Home() {
  const { filterDoctor } = usePatientesStates();

  return (
    <section className="container align-items-center">
      <div className="row align-items-center ">
        <div className="col-3 px-6 text-center ">
          <CardTV />
        </div>
        <div className="col-8 text-center">
          <ListTV
            patientes={filterDoctor}
            mensagem={"Nenhum paciente em para atendimento"}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
