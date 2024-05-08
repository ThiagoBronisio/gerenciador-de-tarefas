import Form from "../../components/Form";
import StatusTarefa from "../../components/StatusTarefa";
import Table from "../../components/Table"
import { ContainerConsultarPage } from "../../styles";
import { useState } from "react";

function ConsultarTarefa() {

    const [task, setTask] = useState([])
    const [taskCount, setTaskCount] = useState(0);
    const [taskStatus, setTaskStatus] = useState(0);
    const [valorInputInicio, setValorInputInicio] = useState('');
    const [valorInputFim, setValorInputFim] = useState('');

    return (
        <ContainerConsultarPage>
            <StatusTarefa
                taskCount={taskCount}
                taskStatus={taskStatus}
            />
            <Form
                setValorInputInicio={setValorInputInicio}
                setValorInputFim={setValorInputFim}
                valorInputInicio={valorInputInicio}
                valorInputFim={valorInputFim}
                setTask={setTask}
                setTaskCount={setTaskCount}
                setTaskStatus={setTaskStatus}
            />

            <Table 
                task={task}
                setTask={setTask}
                valorInputInicio={valorInputInicio}
                valorInputFim={valorInputFim} 
                setTaskCount={setTaskCount}
                setTaskStatus={setTaskStatus}/>
        </ContainerConsultarPage>
    )
}

export default ConsultarTarefa