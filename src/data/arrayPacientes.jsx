const ArrayPacientes = [
  {
    id: "1ed2e2d9-9709-46e1-ab0d-729e8317269b",
    name: "Pedro",
    reason: "dor de barriga",
    level: 1,
    status: 0,
  },
  {
    id: "69667215-c8b2-47ca-9cac-a21d54d3f1e2",
    name: "Paulo",
    reason: "dor de cabeça",
    level: 2,
    status: 0,
  },
  {
    id: "58523a4b-30a2-4bb6-a4a8-8cea9480336c",
    name: "Alice",
    reason: "ALERGIA A CAMARÃO",
    level: 3,
    status: 0,
  },
];

const patients = ArrayPacientes;

const sortedPatients = [...patients].sort((a, b) => {
  if (b.status !== a.status) return b.status - a.status; 
  return b.level - a.level; 
});
console.log("aaaa", sortedPatients);

export default sortedPatients;