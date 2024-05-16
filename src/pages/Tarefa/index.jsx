import Form from "../../components/Form/Form";
import StatusTarefa from "../../components/Status/StatusTarefa";
import Table from "../../components/Table"
import { ContainerConsultarPage } from "../../styles";
import { useState } from "react";

function ConsultarTarefa() {

    const [task, setTask] = useState([])
    const [taskCount, setTaskCount] = useState(0);
    const [taskStatus, setTaskStatus] = useState(0);
    const [refresh, setRefresh] = useState(false);

    return (
        <ContainerConsultarPage className="fade-in">
            <StatusTarefa
                taskCount={taskCount}
                taskStatus={taskStatus}
            />
            <Form
                setTask={setTask}
                task={task}
                setTaskCount={setTaskCount}
                setTaskStatus={setTaskStatus}
                refresh={refresh}
                setRefresh={setRefresh}
            />

            <Table 
                task={task}
                setTask={setTask}
                setTaskCount={setTaskCount}
                setTaskStatus={setTaskStatus}
                setRefresh={setRefresh}
                />
        </ContainerConsultarPage>
    )
}

export default ConsultarTarefa