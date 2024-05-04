import { Separator, ContainerFormConsultar, ContainerButtonConsultar } from "../../styles"
import { useState } from "react";
import Table from "./Table";
import { getTarefas } from "../../services/tarefas-services";


function Form() {

    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [tarefas, setTarefas] = useState(['']);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await getTarefas(dataInicio, dataFim);
        if(response) {
            setTarefas(response)
        }
        console.log(dataInicio)
        console.log(dataFim)
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

                    <ContainerButtonConsultar>
                        <button type="submit">Consultar</button>
                    </ContainerButtonConsultar>
                </form>
                <Separator />
            </ContainerFormConsultar>
            {tarefas.length > 1 && (
            <Table tarefas={tarefas} />
            )}
        </>

    )
}

export default Form