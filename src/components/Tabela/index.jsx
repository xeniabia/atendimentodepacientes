function Tabela (){
    return(
        <table className="table table-hover table-striped">
        <thead>
        <tr>
          <th scope="col">Nome do Paciente</th>
          <th scope="col">Nível</th>
          <th scope="col">Motivo</th>
         <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody></tbody>
      </table>
    )
}
export default Tabela;