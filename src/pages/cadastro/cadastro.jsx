import Form from "../../components/Form";
import Table from "../../components/Table";
import Tabs from "../../components/Tabs";
import SortedPatients from "../../components/orderTrige";
function Cadastro() {
 const filter = SortedPatients.filter((patient) => patient.level === 1 || patient.level === 2 || patient.level === 3)

  return (
    <>
      {" "}
      <Tabs
        title={"Área de pacientes"}
        subtitleUne={"Cadastro"}
        subtitleTwo={"Retire sua ficha"}
        tabUne={<Form />}
        tabTwo={
          <Table
            patientes={filter}
            mensagem={"Nenhuma ficha de paciente"}
            tv={false}
          />
        }
      />
    </>
  );
}

export default Cadastro;
