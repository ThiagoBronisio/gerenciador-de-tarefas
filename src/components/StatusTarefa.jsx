import { ContainerStatusTarefa, StatusDanger, StatusPrimary, StatusSucess } from "../styles"
import CustomModal from "./CustomModal";


function StatusTarefa({ taskCount, taskStatus }) {

    const countActiveTasks = () => {
        const statusesArray = Object.values(taskStatus); // Converte os valores do objeto em um array
        return statusesArray.filter(status => status === 1).length;
    };

    return (

        <ContainerStatusTarefa>

            <StatusSucess>
                <div>
                    <span>{countActiveTasks()}</span>
                    <p>Tarefa ativa</p>
                </div>
            </StatusSucess>

            <StatusDanger>
                <div>
                    <span>0</span>
                    <p>Tarefa inativa</p>
                </div>
            </StatusDanger>

            <StatusPrimary>
                <div>
                    <span>{taskCount}</span>
                    <p>Tarefa total</p>
                </div>
            </StatusPrimary>

            <CustomModal/>
        </ContainerStatusTarefa>

    )
}

export default StatusTarefa