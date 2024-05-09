import React from 'react';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { editarTarefa, getTarefaById } from '../services/tarefas-services';
import Swal from 'sweetalert2';
import { TitleModal, ContainerInputModal, ContainerSelectedModal, ButtonModal, SeparatorModal, ContainerTitleModal } from '../styles';
import { MdClose } from "react-icons/md";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: '20px',
        transform: 'translate(-50%, -50%)',
        maxWidth: '500px',
        width: '100%',
        borderRadius: '8px',
        borderColor: '#ced4da',
    },
};

const validationSchema = Yup.object().shape({
    nome: Yup.string().min(4, 'O nome deve ter pelo menos 4 caracteres').required('O nome da tarefa é obrigatório'),
    descricao: Yup.string().min(4, 'A descrição deve ter pelo menos 4 caracteres').required('A descrição da tarefa é obrigatória'),
    dataHora: Yup.date().required('A data e hora da tarefa são obrigatórias'),
    prioridade: Yup.string().required('A prioridade da tarefa é obrigatória'),
});

export default function EditModal({ isOpen, onClose, urlId }) {

    const [previousUrlId, setPreviousUrlId] = useState('')
    const [formValues, setFormValues] = useState({
        id: '',
        nome: '',
        descricao: '',
        dataHora: '',
        prioridade: '',
        status: ''
    });


    const handleClose = () => {
        onClose()
    }

    const obterTarefa = (id) => {
            getTarefaById(id)
                .then(
                    result => {
                        setFormValues({
                            id: result.id,
                            nome: result.nome,
                            descricao: result.descricao,
                            dataHora: result.dataHora,
                            prioridade: result.prioridade,
                            status: result.status
                        });
                    }
                )
                .catch(
                    e => {
                        console.log(e)
                        }     
                );   
    }

    useEffect(() => {
        if (urlId && urlId !== previousUrlId) {
            obterTarefa(`/${urlId}`);
            setPreviousUrlId(urlId);
        } else {
            setFormValues({
                id: '',
                nome: '',
                descricao: '',
                dataHora: '',
                prioridade: ''
            });
        }
    }, [urlId, previousUrlId]);
    
    const onSubmit = (data) => {
        editarTarefa(data)
            .then( response => {
                obterTarefa(`/${urlId}`);
                handleClose()
                Swal.fire({
                    text: `Párabens! Tarefa criada com sucesso!`,
                    icon: 'success',
                    timer: 3500,
                    confirmButtonColor: "#0000FFB3",
            })})
            .catch(
                e => console.log(e)
            )
    }

    return (
        
        
           <Modal
           style={customStyles}
           isOpen={isOpen}
           onRequestClose={handleClose}>

           <ContainerTitleModal>
               <TitleModal>Atualização de tarefa</TitleModal>
               <MdClose type='button' onClick={handleClose} />
           </ContainerTitleModal>
           <SeparatorModal />

           <Formik
               initialValues={formValues}
               validationSchema={validationSchema}
               enableReinitialize={true}
               onSubmit={onSubmit}>

               <Form>

                   <ContainerInputModal style={{display: 'none'}}>
                       <label htmlFor="id">id</label>
                       <Field 
                           type="text" 
                           id="id" 
                           name="id" 
                           placeholder="id completo"
                           />
                       <ErrorMessage name="id" component="span" />
                   </ContainerInputModal>

                   <ContainerInputModal>
                       <label htmlFor="nome">Nome:</label>
                       <Field 
                           type="text" 
                           id="nome" 
                           name="nome" 
                           placeholder="Nome da tarefa"/>
                       <ErrorMessage name="nome" component="span" />
                   </ContainerInputModal>

                   <ContainerInputModal>
                       <label htmlFor="descricao">Descrição:</label>
                       <Field 
                           type="text" 
                           id="descricao" 
                           name="descricao" 
                           placeholder="Descreva sobre a tarefa" />
                       <ErrorMessage name="descricao" component="span" />
                   </ContainerInputModal>

                   <ContainerInputModal>
                       <label htmlFor="dataHora">Data e Hora:</label>
                       <Field 
                           type="datetime-local" 
                           id="dataHora" 
                           name="dataHora"/>
                       <ErrorMessage name="dataHora" component="span" />
                   </ContainerInputModal>

                   <ContainerSelectedModal>
                       <label htmlFor="prioridade">Prioridade:</label>
                       <Field 
                           as="select" 
                           id="prioridade" 
                           name="prioridade">
                               <option value="">Selecione...</option>
                               <option value="1">Alta</option>
                               <option value="2">Média</option>
                               <option value="3">Baixa</option>
                       </Field>
                       <ErrorMessage name="prioridade" component="span" />
                   </ContainerSelectedModal>
                   <ButtonModal type="submit">Salvar</ButtonModal>
               </Form>
           </Formik>
       </Modal>
    )
}