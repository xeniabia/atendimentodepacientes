import Form from "../../components/Form";
import Table from "../../components/Table";
import Tabs from "../../components/Tabs";
import { usePatientesStates } from "../../context";
import DoctorButons from "../../components/Butons/DoctorButons";
import RegistrationButons from "../../components/Butons/RegistrationButons";
function Cadastro() {
  const { updatePatientStatus, filterDoctor } = usePatientesStates();

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
            patientes={filterDoctor}
            mensagem={"Nenhuma ficha de paciente"}
            tv={false}
            Actions={(id) => (
              <RegistrationButons id={id} onUpdateStatus={updatePatientStatus}/>
            )}
          />
        }
      />
    </>
  );
}

export default Cadastro;
