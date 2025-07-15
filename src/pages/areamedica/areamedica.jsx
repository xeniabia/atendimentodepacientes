import DoctorButons from "../../components/Butons/DoctorButons";
import TrigeButons from "../../components/Butons/TrigeButons";
import RegistrationButons from "../../components/Butons/RegistrationButons";
import Table from "../../components/Table";
import Tabs from "../../components/Tabs";
import { usePatientesStates } from "../../context";

function AreaMedica() {
  const {
    updatePatientLevel,
    updatePatientStatus,
    filterTrige,
    filterDoctor,
    filterAttended,
  } = usePatientesStates();

  return (
    <>
      <Tabs
        nameTabThree={"Atendidos"}
        Tab={true}
        title={"Área Médica"}
        subtitleUne={"Triagem"}
        subtitleTwo={"Atendimento"}
        tabUne={
          <Table
            patientes={filterTrige}
            mensagem={"Nenhum paciente em triagem"}
            Actions={(id) => (
              <TrigeButons id={id} onUpdateLevel={updatePatientLevel} />
            )}
          />
        }
        tabTwo={
          <Table
            patientes={filterDoctor}
            mensagem={"Nenhum paciente  para atendimento"}
            Actions={(id) => (
              <DoctorButons id={id} onUpdateStatus={updatePatientStatus} />
            )}
          />
        }
        TabThree={
          <Table
            patientes={filterAttended}
            mensagem={"Nenhum já atendido"}
            Actions={(id) => <RegistrationButons id={id} />}
          />
        }
      />
    </>
  );
}

export default AreaMedica;
