function FormCadastro (){
    return (
        <form id="patient-form">
        <div className="mb-3">
          <label for="patient-name" className="form-label">
            Nome do Paciente
          </label>
          <input
            type="text"
            className="form-control"
            id="patient-name"
            required
          />
        </div>
        <div className="mb-3">
          <label for="patient-reason" className="form-label">
            Motivo da Visita
          </label>
          <textarea
            className="form-control"
            id="patient-reason"
            rows="3"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onclick="addPatient(event)"
        >
          <i className="bi bi-check-circle"></i> Registrar
          Paciente
        </button>
      </form>
    )
}

export default FormCadastro;