
import Table from "../../components/Table";
import Tabs from "../../components/Tabs";
import SortedPatients from "../../components/orderTrige";
function AreaMedica() {
 const filterTrige = SortedPatients.filter((patient) => patient.level === 0);
 const filterDoctor = SortedPatients.filter(
   (patient) =>
     patient.level === 1 || patient.level === 2 || patient.level === 3
 );
 const filterAttended = SortedPatients.filter((patient) => patient.status === 2);
 
 
  return (
    <>
      {" "}
      <Tabs
        nameTabThree={"Atendios"}
        Tab={true}
        title={"Área Médica"}
        subtitleUne={"Atendimento"}
        subtitleTwo={"Triagem"}
        tabUne={
          <Table
            patientes={filterDoctor}
            mensagem={"Nenhum paciente em para atendimento"}
            tv={false}
          />
        }
        tabTwo={
          <Table
            patientes={filterTrige}
            mensagem={"Nenhum paciente em triagem"}
            tv={false}
          />
        }
        TabThree={
          <Table
            patientes={filterAttended}
            mensagem={"Nenhum já atendido"}
            tv={false}
          />
        }
      />
    </>
  );
}

export default AreaMedica;



