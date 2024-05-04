import axios from "axios";

export const url = () => {
    return "api/tarefas/"
}

export const getTarefas = async (dataInicio, dataFim) => {
    try {
        const response = await axios.get('api/tarefas/' + dataInicio + "/" + dataFim)
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null
    }
}

export const getTarefasSemana = async (dataInicio, dataFim) => {
    try {
        const response = await axios.get(`${url}/${dataInicio}/${dataFim}`)
        return response.data;
    }
    catch (error) {
        console.log(error)
        return null
    }
}