import { usePatientesStates } from "../../context";
import ListTV from "../../components/Tv/List";
import CardTV from "../../components/Tv/Card";
import { useState, useEffect } from "react";

function TV() {
  const { filterDoctor } = usePatientesStates();
  const [nextPatient, setNextPatient] = useState();
  const [treatedPatients, setTreatedPatients] = useState([]);

  useEffect(() => {
    const foundNextPatient = filterDoctor.find((p) => p.status === 0);

    const foundTreatedPatients = filterDoctor.filter((p) => p.status === 1);

    setNextPatient(foundNextPatient);

    const treatedPatientsNames = foundTreatedPatients.map(
      (patient) => patient.name
    );
    setTreatedPatients(treatedPatientsNames);
  }, [filterDoctor]);

  console.log("Pacientes em atendimento:", treatedPatients);

  return (
    <section className="container align-items-center">
      <div className="row align-items-center ">
        <div className="col-8 px-6 text-center ">
          <CardTV
            header={"Paciente(s) em atendimento"}
            patient={treatedPatients} 
            message={
              "Nenhum paciente em atendimento" 
        
            }
          />
          
          <ListTV
            patientes={filterDoctor}
            mensagem={"Nenhum paciente em espera"}
          />
        </div>
        <div className="col-3 text-center">
          <CardTV
            header={
              treatedPatients.length === 0 ? "Em chamado" : "Próximo paciente"
            }
            patient={nextPatient?.name}
            message={treatedPatients.length === 0 ? "chamando" : "proximo"}
          />
        </div>
      </div>
    </section>
  );
}

export default TV;
