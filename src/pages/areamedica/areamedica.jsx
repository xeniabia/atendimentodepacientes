import DoctorButons from "../../components/Butons/DoctorButons";
import TrigeButons from "../../components/Butons/TrigeButons";
import Table from "../../components/Table";
import Tabs from "../../components/Tabs";
import { ArrayPacientes } from "../../data/arrayPacientes";
import { useState, useEffect} from "react";
const LOCAL_STORAGE_KEY = "pacientesApp.pacientes";

function AreaMedica() {


  const [pacientes, setPacientes] = useState(() => {
    
    const storedPacientes = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedPacientes) {
      return JSON.parse(storedPacientes);
    }
   
    return ArrayPacientes;
  });
  pacientes.sort((a, b) => {
    if (b.status !== a.status) return b.status - a.status;
    return b.level - a.level;
  });
  console.log(pacientes)
  useEffect(() => {
 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pacientes));
  }, [pacientes]); 

  const updatePatientLevel = (id, newLevel) => {
    setPacientes((prev) =>
      prev.map((p) => (p.id === id ? { ...p, level: newLevel } : p))
    );
  };
  localStorage.clear();
  
  const updatePatientStatus = (id, newStatus) => {
    setPacientes((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
    );
  };

 
  const filterTrige = pacientes.filter((patient) => patient.level === 0);
  const filterDoctor = pacientes.filter(
    (patient) => patient.level != 0 && patient.status != 2
  );
  const filterAttended = pacientes.filter((patient) => patient.status === 2);

  return (
    <>
      <Tabs
        nameTabThree={"Atendidos"}
        Tab={true}
        title={"Área Médica"}
        subtitleUne={"Atendimento"}
        subtitleTwo={"Triagem"}
        tabUne={
          <Table
            patientes={filterDoctor}
            mensagem={"Nenhum paciente em para atendimento"}
            Actions={(id) => (
              <DoctorButons id={id} onUpdateStatus={updatePatientStatus} />
            )}
          />
        }
        tabTwo={
          <Table
            patientes={filterTrige}
            mensagem={"Nenhum paciente em triagem"}
            Actions={(id) => (
              <TrigeButons id={id} onUpdateLevel={updatePatientLevel} />
            )}
          />
        }
        TabThree={
          <Table
            patientes={filterAttended}
            mensagem={"Nenhum já atendido"}
            Actions={() => null}
          />
        }
      />
    </>
  );
}

export default AreaMedica;

