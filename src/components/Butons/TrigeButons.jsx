import { ArrayPacientes } from "../../data/arrayPacientes";

function TrigeButons({ id }) {
  const handleClick = (level) => {
    console.log(`Paciente ${id} alterado para o nível ${level}`);
    // Aqui você pode adicionar a lógica para atualizar o nível do paciente
  };
  return (
    <>
      <button
        className="btn btn-danger btn-sm me-1"
        onClick={() => handleClick(3)}
        type="button"
      >
        Vermelho
      </button>
      <button
        className="btn btn-warning btn-sm me-1"
        onClick={() => handleClick(2)}
        type="button"
      >
        Amarelo
      </button>
      <button
        className="btn btn-success btn-sm"
        onClick={() => handleClick(1)}
        type="button"
      >
        Verde
      </button>
    </>
  );
}
export default TrigeButons;
