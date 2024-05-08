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

export const postTarefas = async (data) => {
    return axios.post(url(), data)
        .then(response => {
            return response.data
        })
}

export const deleteTarefa = async (id) => {
    return axios.delete(url() + id)
        .then(
            response => {
                return response.data
            }
        )
}