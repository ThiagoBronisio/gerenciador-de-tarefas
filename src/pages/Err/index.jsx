import { ContainerErrorPage, ContainerErrorPageImg, ContainerErrorPageMsg, ButtonErrorPage} from "./styles"
import { Link } from "react-router-dom"
import {ReactComponent as ImgError} from "../../img/svg/img-error.svg"

function Error(){
    return(
        <ContainerErrorPage className="fade-in">
            <ContainerErrorPageImg>
                <ImgError/>
            </ContainerErrorPageImg>

            <ContainerErrorPageMsg>
                <h1>404 Página não encontrada</h1>
                <p>Lamentamos, mas não foi possível encontrar a página que você solicitou. Volte para a página inicial.</p>
                <ButtonErrorPage>
                    <Link to="/">Página inicial</Link>
                </ButtonErrorPage>
            </ContainerErrorPageMsg>
        </ContainerErrorPage>
    )
}

export default Error