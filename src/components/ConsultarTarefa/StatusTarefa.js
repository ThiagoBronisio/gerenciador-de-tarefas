import { ContainerStatusTarefa, StatusDanger, StatusSecondary, StatusSucess } from "../../styles"


function StatusTarefa() {
    return (

        <ContainerStatusTarefa>

            <StatusSucess>
                <div>
                    <span>5</span>
                    <p>Ativo</p>
                </div>
            </StatusSucess>

            <StatusDanger>
                <div>
                    <span>2</span>
                    <p>Inativo</p>
                </div>
            </StatusDanger>

            <StatusSecondary>
                <div>
                <span>20</span>
                <p>Geral</p>
                </div>
            </StatusSecondary>
        </ContainerStatusTarefa>

    )
}

export default StatusTarefa