import { ContainerStatusTarefa, StatusSecondary, StatusPrimary, StatusSucess } from "../styles"
import CustomModal from "./CadastroModal";


function StatusTarefa({ taskCount, taskStatus }) {

    const countActiveTasks = () => {
        const statusesArray = Object.values(taskStatus); // Converte os valores do objeto em um array
        return statusesArray.filter(status => status === 1).length;
    };

    const countInactiveTasks = () => {
        const statusesArray = Object.values(taskStatus); // Converte os valores do objeto em um array
        return statusesArray.filter(status => status === 2).length;
    };

    return (

        <ContainerStatusTarefa>

            <StatusSucess>
                <div>
                    <span>{countActiveTasks()}</span>
                    <p>Tarefas ativas</p>
                </div>
            </StatusSucess>

            <StatusSecondary>
                <div>
                    <span>{countInactiveTasks()}</span>
                    <p>Tarefas finalizadas</p>
                </div>
            </StatusSecondary>

            <StatusPrimary>
                <div>
                    <span>{taskCount}</span>
                    <p>Total de tarefas</p>
                </div>
            </StatusPrimary>

            <CustomModal/>
        </ContainerStatusTarefa>

    )
}

export default StatusTarefa