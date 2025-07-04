import DoctorButons from "../../components/Butons/DoctorButons";
import TrigeButons from "../../components/Butons/TrigeButons";
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
