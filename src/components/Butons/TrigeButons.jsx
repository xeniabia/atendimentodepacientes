function TrigeButons({ id, onUpdateLevel }) {
  const handleClick = (newLevel) => {
    console.log(`Paciente ${id} alterado para o nível ${newLevel}`);
    // Chama a função passada pelo componente pai para atualizar o estado
    onUpdateLevel(id, newLevel);
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
