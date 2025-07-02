import { ArrayPacientes } from "../../data/arrayPacientes";

const SortedPatients = [...ArrayPacientes].sort((a, b) => {
  if (b.status !== a.status) return b.status - a.status;
  return b.level - a.level;
});


export default SortedPatients;
