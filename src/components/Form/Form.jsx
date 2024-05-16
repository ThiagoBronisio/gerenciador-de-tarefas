import {
    ContainerFormConsultar,
    FormConsultar,
    ContainerFormInputDate,
    ContainerFormInputName,
    ContainerFormButtonPostGet,
    ContainerButtonCadastrar,
    ContainerButtonConsultar
} from "./styles.jsx";
import { Separator } from "../../styles.jsx";
import { useState, useEffect } from "react";
import Swal from "sweetalert2"
import { IoMdSearch } from "react-icons/io";
import CadastroModal from "../CadastroModal";
import { getTarefas } from "../../services/tarefas-services.jsx";


function Form({ setTask, setTaskCount, setTaskStatus, refresh, setRefresh }) {

    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [nome, setNome] = useState('');
    const [modalAberto, setModalAberto] = useState(false);


    const abrirModal = () => {
        setModalAberto(true);
    }

    const isValidDate = (dateString) => {
        const date = new Date(dateString);
        if(!isNaN(date) !== ''){
            return !isNaN(date);
        }
    }

    const fetchTarefas = async (e) => {
        e.preventDefault();
        if ((dataInicio && !isValidDate(dataInicio)) || (dataFim && !isValidDate(dataFim))) {
            Swal.fire({
                text: "Por favor, insira datas válidas.",
                icon: "warning",
                timer: 3500,
                confirmButtonColor: "#0000FFB3"
            });
            return;
        }
        getTarefas(dataInicio, dataFim, nome)
            .then(
                (response) => {
                    if (response.length === 0) {
                        Swal.fire({
                            text: "Nenhuma tarefa encontrada",
                            icon: "warning",
                            timer: 3500,
                            confirmButtonColor: "#0000FFB3"
                        })
                    } else  {
                        setTask(response)
                        setTaskCount(response.length)
                        const statusMap = response.map(tarefa => tarefa.status)
                        setTaskStatus(statusMap)
                    }
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                    let errorMessage = ''
                    if (error.response.status === 500 && dataInicio === '' && dataFim === '' && nome === '') {
                        errorMessage = "Preencha os campos"
                    } else if (error.response.status === 500 && dataInicio != null && dataFim === '') {
                        errorMessage = "Preencha o campo Data Final."
                    } else if (error.response.status === 500 && dataInicio === '' && dataFim != null) {
                        errorMessage = "Preencha o campo Data Inicio."
                    } else if (error.response.status === 500) {
                        errorMessage = "Tente novamente mais tarde"
                    } else if (error.response.status === 400) {
                        errorMessage = "Erro, tarefa não encontrada"
                    } else {
                        errorMessage = "Erro"
                    }
                    
                    Swal.fire({
                        text: errorMessage,
                        icon: 'warning',
                        timer: 3500,
                        confirmButtonColor: "#0000FFB3"
                    }) 
                }
            )
    }

    useEffect(() => {
        if (refresh) {
            getTarefas(dataInicio, dataFim, nome)
                .then(response => {
                    setRefresh(false);
                    setTask(response);
                    setTaskCount(response.length);
                    const statusMap = response.map(tarefa => tarefa.status);
                    setTaskStatus(statusMap);
                })
                .catch(error => {
                    console.log(error);
                    setRefresh(false);
                });
        }
    }, [refresh, setRefresh, dataInicio, dataFim, nome, setTask, setTaskCount, setTaskStatus]);

    return (
        <>
            <ContainerFormConsultar>
                <Separator />
                <FormConsultar>
                    <ContainerFormInputDate>
                        <label>Data Inicio:
                            <input type="datetime-local"
                                value={dataInicio}
                                onChange={(e) => setDataInicio(e.target.value)}>
                            </input>
                        </label>

                        <label>Data Final :
                            <input type="datetime-local"
                                value={dataFim}
                                onChange={(e) => setDataFim(e.target.value)}>
                            </input>
                        </label>
                    </ContainerFormInputDate>

                    <ContainerFormInputName>
                        <input type="text"
                            placeholder="Digite o nome da tarefa"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}>
                        </input>
                        <IoMdSearch onClick={fetchTarefas} type="button" size={20} />
                    </ContainerFormInputName>


                    <ContainerFormButtonPostGet>
                        <ContainerButtonCadastrar>
                            <button type="button" onClick={abrirModal}>Cadastrar</button>
                        </ContainerButtonCadastrar>
                        <CadastroModal setRefresh={setRefresh} isOpen={modalAberto} onClose={() => setModalAberto(false)} />

                        <ContainerButtonConsultar>
                            <button onClick={fetchTarefas} type="button">Consultar</button>
                        </ContainerButtonConsultar>
                    </ContainerFormButtonPostGet>

                </FormConsultar>
            </ContainerFormConsultar>
        </>
    )
}

export default Form