import { useState, useEffect } from "react";

function LevelDot({ patient }) {
  const [cor, setCor] = useState(" ");

  useEffect(() => {
    if (patient === 1) {
      setCor("bg-success");
    } else if (patient === 2) {
      setCor("bg-warning");
    } else if (patient === 3) {
      setCor("bg-danger");
    } else {
      setCor("bg-secondary");
    }
  }, [patient]);

  return (
    <span
      className={`ms-2 rounded-circle d-inline-block align-middle ${cor}`}
      style={{ width: "16px", height: "16px" }}
    ></span>
  );
}
export default LevelDot;
