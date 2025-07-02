import Form from "../../components/Form";
import Table from "../../components/Table";
import SortedPatients from "../../components/orderTrige";
function Cadastro() {
 const filter = SortedPatients.filter((patient) => patient.level === 1 || patient.level === 2 || patient.level === 3)

  return (
    <>
      {" "}
      <div className="container mt-4">
        <h2 className="mb-4">Área de pacientes</h2>

        <ul className="nav nav-tabs mb-3" id="medicalAreaTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="em-atendimento-tab"
              data-bs-toggle="tab"
              data-bs-target="#em-atendimento"
              type="button"
              role="tab"
              aria-controls="em-atendimento"
              aria-selected="true"
            >
              Cadastro
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="triagem-tab"
              data-bs-toggle="tab"
              data-bs-target="#triagem"
              type="button"
              role="tab"
              aria-controls="triagem"
              aria-selected="false"
            >
              Retire sua ficha
            </button>
          </li>
        </ul>

        <div className="tab-content" id="medicalAreaTabsContent">
          <div
            className="tab-pane fade show active tab-content-area"
            id="em-atendimento"
            role="tabpanel"
            aria-labelledby="em-atendimento-tab"
          >
            <div id="screen-cadastro" className="screen container mt-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <Form />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade tab-content-area"
          id="triagem"
          role="tabpanel"
          aria-labelledby="triagem-tab"
        >
          <h4 className="mb-3">Retire sua ficha</h4>

          <div id="registration">
            <div className="card-body">
            <Table  patientes={filter} mensagem={"Nenhuma ficha de paciente"} tv={false}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
