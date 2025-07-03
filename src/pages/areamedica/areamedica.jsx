import DoctorButons from "../../components/Butons/DoctorButons";
import TrigeButons from "../../components/Butons/TrigeButons";
import Table from "../../components/Table";
import Tabs from "../../components/Tabs";
import SortedPatients from "../../components/orderTrige";

function AreaMedica() {
  const filterTrige = SortedPatients.filter((patient) => patient.level === 0);
  const filterDoctor = SortedPatients.filter(
    (patient) =>
      patient.level != 0 && patient.status != 2
  );
  const filterAttended = SortedPatients.filter(
    (patient) => patient.status === 2
  );

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
            Actions={(id) => <DoctorButons id={id} />} 
          />
        }
        tabTwo={
          <Table
            patientes={filterTrige}
            mensagem={"Nenhum paciente em triagem"}
            Actions={(id) => <TrigeButons id={id} />}
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

