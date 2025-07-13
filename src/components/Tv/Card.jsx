function CardTV({ header, patient, message }) {
  // Verifica se patient é um array ou uma string
  const renderPatients = () => {
    if (Array.isArray(patient)) {
      // Se for um array, renderiza cada paciente
      return patient.map((patientName, index) => (
        <h2 key={index} className="card-title">
          {patientName}
        </h2>
      ));
    } else if (patient) {
      // Se for uma string, renderiza normalmente
      return <h2 className="card-title">{patient}</h2>;
    }
    // Se não houver paciente, não renderiza nada
    return null;
  };

  return (
    <div className="align-items-center justify-content-center mt-2">
      <div className="card border-warning mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">{header}</div>
        <div className="card-body">
          <p className="card-text">{message}</p>
          {renderPatients()}
        </div>
      </div>
    </div>
  );
}

export default CardTV;
