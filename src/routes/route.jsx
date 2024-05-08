import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ConsultarTarefas from "../pages/Tarefa/index"
import Erro from "../pages/Err/index";

const RotasUrl = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tarefas" element={<ConsultarTarefas />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </Router> 
    )
}

export default RotasUrl;