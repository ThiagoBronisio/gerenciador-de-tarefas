import React from "react";
import { useState } from "react";
import EditModal from "./EditModal"
import EditModalStatus from "./EditModalStatus";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Pagination from "./Pagination"
import PaginationSelector from "./PaginationSelector";
import { ContainerPagination } from "../styles";
import { format } from 'date-fns-tz';
import { deleteTarefa } from "../services/tarefas-services";
import Swal from "sweetalert2";

function Table({ task, setRefresh }) {

  const [currentPage, setCurrentPage] = useState(0)
  const [itensPerPage, setItensPerPage] = useState(10);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalStatusOpen, setModalStatusOpen] = useState(false);
  const [urlId, setUrlId] = useState(null);
  const [urlIdStatus, setUrlIdStatus] = useState(null)

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
    2: 'Finalizado'
  };

  function getClassForPriority(prioridade) {
    switch (prioridade) {
      case 1:
        return 'text-danger';
      case 2:
        return 'text-warning';
      case 3:
        return 'text-primary';
      default:
        return '';
    }
  }

  function getClassForStatus(status) {
    switch (status) {
      case 1:
        return 'text-success';
      case 2:
        return 'text-secondary';
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


  const excluirTarefa = (id) => {
    Swal.fire({
      title: "Tem certeza?",
      text: `Você não poderá reverter isso!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#0000FFB3",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.isConfirmed) {
        deleteTarefa(id)
        Swal.fire({
          text: "Tarefa deletada com sucesso!",
          icon: "success",
          confirmButtonColor: "#0000FFB3",
          timer: 3000
        });
        setRefresh(true); 
      }
    })
      .catch((error) => {
        let errorMessage = 'Erro desconhecido';
        switch (error.response.status) {
          case 400:
            errorMessage = 'Erro, tente novamente mais tarde!';
            break;
          case 500:
            errorMessage = 'Erro, tente novamente mais tarde!';
            break;
          default:
            break;
        }
        Swal.fire({
          text: errorMessage,
          icon: 'error',
          timer: 3500,
          confirmButtonColor: "#0000FFB3"
        })

      })
  }

  const abrirModalEdit = (id) => {
    setUrlId(id)
    setModalAberto(true);
  }

  const abrirModalEditStatus = (id) => {
    setUrlIdStatus(id)
    setModalStatusOpen(true)
  }

  return (
    <>
      {task.length > 0 && (
        <div className="table-responsive">
          <table className="table table-sm table-striped table-bordered">
            <thead>
              <tr>
                <th className="fw-bold" style={{ color: "#676a6c" }}>Nome da Tarefa</th>
                <th className="fw-bold" style={{ color: "#676a6c" }}>Status</th>
                <th className="fw-bold" style={{ color: "#676a6c" }}>Data e Hora</th>
                <th className="fw-bold" style={{ color: "#676a6c" }}>Prioridade</th>
                <th className="fw-bold" style={{ color: "#676a6c" }}>Descrição</th>
                <th className="fw-bold" style={{ color: "#676a6c" }}></th>
              </tr>
            </thead>

            <tbody className="fade-in">
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
                    <FaEdit as="a" type="button" className='fs-5 text-primary' onClick={() => abrirModalEdit(task.id)} />
                    <RiDeleteBin2Fill type="button" className='fs-5 text-danger m-auto' onClick={() => excluirTarefa(task.id)} />
                    <IoMdCheckmarkCircleOutline onClick={() => abrirModalEditStatus(task.id, task.status)} type="button" className="fs-5 text-success" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {task.length > 0 && (
        <ContainerPagination className="fade-in">
          <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
          <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </ContainerPagination>
      )}

      <EditModal type="button"
        setRefresh={setRefresh} 
        urlId={urlId} 
        setUrlId={setUrlId}
        isOpen={modalAberto} 
        onClose={() => setModalAberto(false)} />
      
      <EditModalStatus type="button"
        setRefresh={setRefresh} 
        urlIdStatus={urlIdStatus} 
        setUrlIdStatus={setUrlIdStatus} 
        isOpen={modalStatusOpen} 
        onClose={() => setModalStatusOpen(false)} />
    </>
  )
}

export default Table;