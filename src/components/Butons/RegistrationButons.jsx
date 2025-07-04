//import html2pdf from "html2pdf.js";

function RegistrationButons({ id }) {
  
  const handleClick = () => {
    console.log(`o id ${id} alterado para o nível`);
   
  };

 
  return (
    <>
      <button
        className="btn btn-warning btn-sm me-1"
        type="button"
        onClick={() => handleClick()}
      >
        PDF
      </button>
    </>
  );
}
export default RegistrationButons;
