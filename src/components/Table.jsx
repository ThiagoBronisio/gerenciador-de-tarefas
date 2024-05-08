import React, { useEffect } from "react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Pagination from "./Pagination"
import PaginationSelector from "./PaginationSelector";
import { ContainerPagination } from "../styles";
import { format } from 'date-fns-tz';
import { deleteTarefa, getTarefas } from "../services/tarefas-services";
import Swal from "sweetalert2";

function Table({ task, setTask, valorInputInicio, valorInputFim, setTaskCount, setTaskStatus }) {

  const [currentPage, setCurrentPage] = useState(0)
  const [itensPerPage, setItensPerPage] = useState(10);

  const pages = Math.ceil(task.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = task.slice(startIndex, endIndex)

  const prioridades = {
    1: 'Alta',
    2: 'Média',
    3: 'Baixa'
  };

  const isActive = {
    1: 'Ativo',
    2: 'Inativo'
  };

  function getClassForPriority(prioridade) {
    switch (prioridade) {
      case 1:
        return 'text-danger fw-bold';
      case 2:
        return 'text-warning fw-bold';
      case 3:
        return 'text-primary fw-bold';
      default:
        return '';
    }
  }

  function getClassForStatus(status) {
    switch (status) {
      case 1:
        return 'text-success fw-bold';
      case 2:
        return 'text-darnger fw-bold';
      default:
        return '';
    }
  }

  const descricaoPrioridade = (prioridade) => {
    return prioridades[prioridade];
  };

  const descricaoStatus = (status) => {
    return isActive[status]
  };

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return format(dateTime, 'dd/MM/yyyy HH:mm', { timeZone: 'America/Sao_Paulo' });
  };

  const fetchTarefa = async () => {
    const response = await getTarefas(valorInputInicio, valorInputFim);
    setTask(response)
    setTaskCount(response.length)
    const statusMap = response.map(tarefa => tarefa.status)
    setTaskStatus(statusMap)
  }

  useEffect(() => {
    if(task.length > 0){
      fetchTarefa()
    }
  }, [task])

  const excluirTarefa = (id) => {
    Swal.fire({
      title: "Tem certeza?",
      text: `Você não poderá reverter isso!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#0000FFB3",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        deleteTarefa(id)
        Swal.fire({
          text: "Tarefa deletada com sucesso!",
          icon: "success",
          confirmButtonColor: "#0000FFB3",
          timer: 3000
        });
      }
    })
      .catch(
        e => {
          console.log(e)
        }
      )
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th style={{ color: "#676a6c" }}>Nome da Tarefa</th>
              <th style={{ color: "#676a6c" }}>Status</th>
              <th style={{ color: "#676a6c" }}>Data e Hora</th>
              <th style={{ color: "#676a6c" }}>Prioridade</th>
              <th style={{ color: "#676a6c" }}>Descrição</th>
              <th style={{ color: "#676a6c" }}></th>
            </tr>
          </thead>

          <tbody>
            {task && currentItens.map(task => (
              <tr key={task.id}>
                <td style={{ color: "#676a6c" }} className='p-2'>
                  {task.nome}
                </td>
                <td style={{ color: "#676a6c" }} className={`p-2 ${getClassForStatus(task.status)}`}>
                  {descricaoStatus(task.status)}
                </td>
                <td style={{ color: "#676a6c" }} className='p-2'>
                  {formatDateTime(task.dataHora)}
                </td>
                <td style={{ color: "#676a6c" }} className={`p-2 ${getClassForPriority(task.prioridade)}`}>
                  {descricaoPrioridade(task.prioridade)}
                </td>
                <td style={{ color: "#676a6c" }} className='p-2'>
                  {task.descricao}
                </td>
                <td style={{ color: "#676a6c" }} className='p-2'>
                  <FaEdit className='fs-5 text-primary' />
                  <RiDeleteBin2Fill type="button" onClick={() => excluirTarefa(task.id)} className='fs-5 text-danger m-auto' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {task.length > 0 && (
        <ContainerPagination>
          <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
          <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </ContainerPagination>
      )}

    </>
  )
}

export default Table;