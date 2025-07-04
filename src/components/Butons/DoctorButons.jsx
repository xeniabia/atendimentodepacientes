

function DoctorButons({ id, onUpdateStatus }) {

  

  const handleClick = (newStatus) => {
   console.log(`Paciente ${id} alterado para o Status ${newStatus}`);
    onUpdateStatus(id, newStatus);
    }


  return (
    <>
      <button
        className="btn btn-primary btn-sm me-1"
        onClick={() => handleClick(1)}
        type="button"
      >
        Atender
      </button>
      <button
        className="btn btn-success btn-sm"
        onClick={() => handleClick(2)}
        type="button"
      >
        Finalizar
      </button>
    </>
  );
}

export default DoctorButons;
