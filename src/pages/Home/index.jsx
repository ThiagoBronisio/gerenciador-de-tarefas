import React from "react"
import { ContainerHomePage, ContainerHomePageTitle, ContainerHomePageList, ContainerHomePageButton } from "./styles.jsx"
import { GoChecklist } from "react-icons/go";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router-dom"

function Home() {
    return (
        <ContainerHomePage className="fade-in">
            <ContainerHomePageTitle>
                <div>
                    <h1>Gerenciador de Tarefas</h1>
                    <GoChecklist />
                </div>
                <h2>Organize-se, fique à frente! Use nosso recurso de lista de verificação para agilizar suas tarefas e conquistar seu dia com confiança.</h2>
            </ContainerHomePageTitle>

            <ContainerHomePageList>
                <ul>
                    <li> <IoCheckmarkDoneSharp/>Organização</li>
                    <li> <IoCheckmarkDoneSharp/>Aumento da produtividade</li>
                    <li> <IoCheckmarkDoneSharp/>Economia de tempo</li>
                    <li> <IoCheckmarkDoneSharp/>Aumento da eficiência</li>
                </ul>
            </ContainerHomePageList>

            <ContainerHomePageButton>
                <Link to="/tarefas"><button>Comece grátis</button></Link>
            </ContainerHomePageButton>

        </ContainerHomePage>

    )
}

export default Home

