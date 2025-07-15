import LevelDot from "../levelDot";
function LisTv({ patientes, mensagem }) {

  const proximoPaciente = patientes.find((p) => p.status === 0);
const pacientesFiltrados = patientes.filter(
  (patient) => patient.status !== 1 && patient !== proximoPaciente
);

return (
  <div className="card mt-5">
    <div className="card-header ">
      <h5 className="card-title fw-bold">Em de espera </h5>
    </div>
    {pacientesFiltrados.length > 0 ? (
      <ul className="list-group list-group-flush">
        {pacientesFiltrados.map((patient) => (
          <li className="list-group-item " key={patient.id}>
            <h5>{patient.name}</h5>
            <p>
              Nível: <LevelDot patient={patient.level} /> Estado:
              {patient.status === 0 ? " Em Fila" : " "}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <div className="card-body">
        <p className="card-text">{mensagem}</p>
      </div>
    )}
  </div>
);
}
export default LisTv;
