

function Tabs ({title, subtitleUne, subtitleTwo, tabUne, tabTwo, TabThree, Tab, nameTabThree }) {
    return (
      <>
        <div className="container mt-4">
          <h2 className="mb-4">{title}</h2>

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
                {subtitleUne}
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
                {subtitleTwo}
              </button>
            </li>
            {Tab == true ? (
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="atendidos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#atendidos"
                  type="button"
                  role="tab"
                  aria-controls="atendidos"
                  aria-selected="false"
                >
                  {nameTabThree}
                </button>
              </li>
            ) : null}
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
                      <div className="card-body">{tabUne}</div>
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
              <div id="screen-cadastro" className="screen container mt-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">{tabTwo}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade tab-content-area"
              id="atendidos"
              role="tabpanel"
              aria-labelledby="atendidos-tab"
            >
              <div id="screen-cadastro" className="screen container mt-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">{TabThree}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Tabs;