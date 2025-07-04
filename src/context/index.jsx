import { createContext, useContext, useState, useEffect} from "react";
import { ArrayPacientes } from "../data/arrayPacientes";

// Cria o contexto
const PatientesStatesContext = createContext();
const LOCAL_STORAGE_KEY = "pacientesApp.pacientes";

export function PatientesStatesProvider({ children }) {
 
 
   const [pacientes, setPacientes] = useState(() => {
     
     const storedPacientes = localStorage.getItem(LOCAL_STORAGE_KEY);
     if (storedPacientes) {
       return JSON.parse(storedPacientes);
     }
    
     return ArrayPacientes;
   });
   pacientes.sort((a, b) => {
     if (b.status !== a.status) return b.status - a.status;
     return b.level - a.level;
   });
   console.log(pacientes)
   useEffect(() => {
  
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pacientes));
   }, [pacientes]); 
 
   const updatePatientLevel = (id, newLevel) => {
     setPacientes((prev) =>
       prev.map((p) => (p.id === id ? { ...p, level: newLevel } : p))
     );
   };
   
   
   const updatePatientStatus = (id, newStatus) => {
     setPacientes((prev) =>
       prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
     );
   };
 
  
   const filterTrige = pacientes.filter((patient) => patient.level === 0);
   const filterDoctor = pacientes.filter(
     (patient) => patient.level != 0 && patient.status != 2
   );
   const filterAttended = pacientes.filter((patient) => patient.status === 2);

  return (
    <PatientesStatesContext.Provider
      value={{
        pacientes,
        setPacientes,
        updatePatientLevel,
        updatePatientStatus,
        filterTrige,
        filterDoctor,
        filterAttended
      }}
    >
      {children}
    </PatientesStatesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePatientesStates() {
  return useContext(PatientesStatesContext);
}
