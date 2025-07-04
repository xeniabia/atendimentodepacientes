/* eslint-disable no-unused-vars */
import { usePatientesStates } from "../../context";
import { useState } from "react";

function Form() {
  const { setPacientes } = usePatientesStates();
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  function addPatient(e) {
    e.preventDefault();
    setPacientes((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name,
        reason,
        level: 0,
        status: 0,
      },
    ]);
    
    setName("");
    setReason("");
    alert("paciente cadastrado")
    
  }
  return (
    <form id="patient-form" onSubmit={addPatient}>
      <div className="mb-3">
        <label htmlFor="patient-name" className="form-label">
          Nome do Paciente
        </label>
        <input
          type="text"
          className="form-control"
          id="patient-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="patient-reason" className="form-label">
          Motivo da Visita
        </label>
        <textarea
          className="form-control"
          id="patient-reason"
          rows="3"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success">
        <i className="bi bi-check-circle"></i> Registrar Paciente
      </button>
    </form>
  );
}

export default Form;
