import React from 'react';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { editarTarefa, getTarefaById } from '../services/tarefas-services';
import { TitleModal, ContainerSelectedModal, ButtonModal, SeparatorModal, ContainerTitleModal } from '../styles';
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
    status: Yup.string().required('O status da tarefa é obrigatório'),
});


export default function EditModalStatus({ isOpen, onClose, urlId }) {

    const [previousUrlId, setPreviousUrlId] = useState('')
    const [formValues, setFormValues] = useState({
        id: '',
        nome: '',
        descricao: '',
        dataHora: '',
        prioridade: '',
        status: Number
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
            obterTarefa(`${urlId}`);
            setPreviousUrlId(urlId);
        } else {
            setFormValues({
                id: '',
                nome: '',
                descricao: '',
                dataHora: '',
                prioridade: '',
                status: ''
            });
        }
    }, [urlId, previousUrlId]);

    const onSubmit = (data) => {
        editarTarefa(data)
            .then( response => {
                obterTarefa(`/${urlId}`);
                handleClose()
                Swal.fire({
                    text: `Tarefa atualizada`,
                    icon: 'success',
                    timer: 3500,
                    confirmButtonColor: "#0000FFB3",
            })})
            .catch(
                e => console.log(e)
            )
            console.log(data)
    }

    return (

        <Modal
            style={customStyles}
            isOpen={isOpen}
            onRequestClose={handleClose}
            >

            <ContainerTitleModal>
                <TitleModal>Selecione o status da tarefa</TitleModal>
                <MdClose type='button' onClick={handleClose} />
            </ContainerTitleModal>
            <SeparatorModal />

            <Formik
                initialValues={formValues}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={onSubmit}
            >

                <Form>
                    <ContainerSelectedModal>
                        <label htmlFor="status">Status</label>
                        <Field
                            as="select"
                            id="status"
                            name="status">
                            <option value="">Selecione...</option>
                            <option value="1">Tarefa ativa</option>
                            <option value="2">Tarefa finalizada</option>
                        </Field>
                        <ErrorMessage name="status" component="span" />
                    </ContainerSelectedModal>
                    <ButtonModal type="submit">Salvar</ButtonModal>
                </Form>
            </Formik>
        </Modal>
    )
}