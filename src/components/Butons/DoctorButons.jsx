function DoctorButons({ id, onUpdateStatus }) {
  const handleClick = (action) => {
    console.log(`Paciente ${id} - Ação: ${action}`);

    // Diferentes ações podem alterar o status do paciente
    switch (action) {
      case "atender":
        // Manter o paciente na lista de atendimento (não muda status)
        console.log(`Iniciando atendimento do paciente ${id}`);
        break;
      case "finalizar":
        // Marcar como atendido (status = 2)
        onUpdateStatus(id, 2);
        break;
      case "solicitar_exame":
        // Pode manter o status atual ou criar um novo status para "aguardando exame"
        console.log(`Solicitando exame para paciente ${id}`);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button
        className="btn btn-primary btn-sm me-1"
        onClick={() => handleClick("atender")}
        type="button"
      >
        Atender
      </button>
      <button
        className="btn btn-success btn-sm"
        onClick={() => handleClick("finalizar")}
        type="button"
      >
        Finalizar
      </button>
    </>
  );
}

export default DoctorButons;
