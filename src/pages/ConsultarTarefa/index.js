import Form from "../../components/ConsultarTarefa/Form";
import StatusTarefa from "../../components/ConsultarTarefa/StatusTarefa";
import { ContainerConsultarPage } from "../../styles";

function ConsultarTarefa() {

    return (
        <ContainerConsultarPage>
            <StatusTarefa />
            <Form />
        </ContainerConsultarPage>
    )
}

export default ConsultarTarefa