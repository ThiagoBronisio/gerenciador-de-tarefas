import { Separator, ContainerFormConsultar, ContainerButtonCadastrar, ContainerButtonConsultar } from "../styles"
import { useState } from "react";
import { getTarefas } from "../services/tarefas-services";
import CustomModal from "./CadastroModal";


function Form({ setTaskCount, setTask, setTaskStatus, setValorInputInicio, setValorInputFim}) {

    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [modalAberto, setModalAberto] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setValorInputInicio(dataInicio)
        setValorInputFim(dataFim)

        const response = await getTarefas(dataInicio, dataFim);
        if (response) {
            setTask(response)
            setTaskCount(response.length)
            const statusMap = response.map(tarefa => tarefa.status)
            setTaskStatus(statusMap)

        }
    }
    
    const abrirModal = () => {
        setModalAberto(true);
    }

    return (
        <>
            <ContainerFormConsultar>
                <Separator />
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
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
                        </div>
                    </div>

                    <ContainerButtonCadastrar>
                        <button type="button" onClick={abrirModal}>Cadastrar</button>
                    </ContainerButtonCadastrar>
                    <CustomModal isOpen={modalAberto} onClose={() => setModalAberto(false)} />

                    <ContainerButtonConsultar>
                        <button type="submit">Consultar</button>
                    </ContainerButtonConsultar>

                </form>
            </ContainerFormConsultar>
        </>

    )
}

export default Form