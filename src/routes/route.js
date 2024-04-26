import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ConsultarTarefas from "../pages/ConsultarTarefa/index"
import CadastrarTarefas from "../pages/CadastrarTarefa/index"
import Erro from "../pages/Err/index";

const RotasUrl = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/consultar-tarefas" element={<ConsultarTarefas />} />
                <Route path="/cadastrar-tarefas" element={<CadastrarTarefas />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </Router> 
    )
}

export default RotasUrl;