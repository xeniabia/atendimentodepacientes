import { usePatientesStates } from "../../context";
import ListTV from "../../components/Tv/List";
import CardTV from "../../components/Tv/Card";

function Home() {
  const { filterDoctor } = usePatientesStates();

  return (
    <section className="container align-items-center text-center">
      <ListTV
        patientes={filterDoctor}
        mensagem={"Nenhum paciente em para atendimento"}
      />
    </section>
  );
}

export default Home;
