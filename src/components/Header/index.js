import { Head } from "../../styles"

function Header() {
    return (
        <Head>

            <nav>
                <div>
                    <img src="#" alt="logotipo" />
                </div>

                <div>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>

                        <li>
                            <a href="/cadastro-tarefas">Cadastro de tarefas</a>
                        </li>

                        <li>
                            <a href="/consultar-tarefas">Consulta de tarefas</a>                       
                        </li>
                    </ul>
                </div>
            </nav>
        </Head>
    )
}

export default Header