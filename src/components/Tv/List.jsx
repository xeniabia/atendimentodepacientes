import LevelDot from "../levelDot";
function LisTv({ patientes, mensagem }) {
  const proximoPaciente = patientes.find((p) => p.status === 0);

  return (
    <>
      <div className="card mt-5">
        <div className="card-header">
          <h5 className="card-title fw-bold">Lista de espera </h5>{" "}
        </div>
        {patientes.length > 0 ? (
          <ul className="list-group list-group-flush">
            {patientes.map((patient) => (
              <li className="list-group-item" key={patient.id}>
                <h2>{patient.name}</h2>
                <p>
                  {" "}
                  Nível:
                  <LevelDot patient={patient.level} /> Estado:
                  {patient.id === proximoPaciente?.id
                    ? " (Próximo)"
                    : patient.status === 1
                    ? " Em atendimento"
                    : " Em fila"}{" "}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          mensagem
        )}
      </div>
    </>
  );
}
export default LisTv;
