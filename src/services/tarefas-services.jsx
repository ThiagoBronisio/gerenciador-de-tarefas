import axios from "axios";
import { format } from 'date-fns';

export const url = () => {
    return "api/tarefas/"
}

export const getTarefas = async (dataInicio, dataFim, nome) => {
    const params = {
        dataInicio: dataInicio ? format(dataInicio, 'yyyy-MM-dd\'T\'HH:mm:ss') : null,
        dataFim: dataFim ? format(dataFim, 'yyyy-MM-dd\'T\'HH:mm:ss') : null,
        nome: nome || ''
    };
    return axios.get("api/tarefas", {params})
        .then(response => {
            return response.data
        })
}


export const getTarefaById = (id) => {
    return axios.get(url() + "/" + id)
        .then(
            response => {
                return response.data;
            })
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

export const editarTarefa = async (data) => {
    return axios.put(url(), data)
        .then(response => {
            return response.data
            
        })
}

export const editarStatus = async (id, status) =>{
    return axios.put(url() + id + '/' + status)
        .then(
            response => {
                return response.data
            }
        )
}

export const putTarefa = async (data) => {
    return axios.put(url(), data)
        .then( response => {
            return response.data
        })
}