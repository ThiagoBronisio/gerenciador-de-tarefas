import { format } from 'date-fns';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

function Table({tarefas}) {

  return (
    <div className="table-responsive">
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th>Nome da tarefa</th>
            <th>Data e Hora</th>
            <th>Status</th>
            <th>Prioridade</th>
            <th>Descrição</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {tarefas.map(tarefa => (
            <tr key={tarefa.id}>
              <td className='p-2'>{tarefa.nome}</td>
              <td className='p-2'>{format(new Date(tarefa.dataHora), 'dd/MM/yyyy HH:mm', { timeZone: 'America/Sao_Paulo' })}</td>
              <td className='p-2'>{tarefa.status}</td>
              <td className='p-2'>{tarefa.prioridade}</td>
              <td className='p-2'>{tarefa.descricao}</td>
              <td className='text-center p-2'> <FaEdit className='fs-4 text-primary' /> <RiDeleteBin2Fill className='fs-4 text-danger m-auto' /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;