import { usePatientesStates } from "../../context";
import ListTV from "../../components/Tv/List";
import CardTV from "../../components/Tv/Card";
import { useState,
  useEffect } from "react";
function Home() {
  const { filterDoctor } = usePatientesStates();
  const [nextPatient, setNextPatient] = useState();
  const [treatedPatient, setTreatedPatient] = useState();
  const foundNextPatient = filterDoctor.find((p) => p.status === 0);
  const foundTreatePatient = filterDoctor.find((p) => p.status === 1);

  useEffect(() => {
    if (foundNextPatient || foundTreatePatient) {
      setNextPatient(foundNextPatient);
      setTreatedPatient(foundTreatePatient);
    }
  }, [foundNextPatient, foundTreatePatient]);
  


  return (
    <section className="container align-items-center">
      <div className="row align-items-center ">
        <div className="col-8 px-6 text-center ">
          <CardTV patient={treatedPatient?.name} />
          <ListTV
            patientes={filterDoctor}
            mensagem={"Nenhum paciente em para atendimento"}
          />
        </div>
        <div className="col-3 text-center">
          <CardTV patient={nextPatient?.name} />
        </div>
      </div>
    </section>
  );
}

export default Home;
