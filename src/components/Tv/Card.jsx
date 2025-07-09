

function CardTV({ header, patient, message }) {

  

  return (
    <div className="align-items-center justify-content-center mt-2">
      <div className="card border-warning mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">{header}</div>
        <div className="card-body">
          <p className="card-text">{message}</p>
          <h2 className="card-title ">{patient}</h2>
        </div>
      </div>
    </div>
  );
}

export default CardTV;
