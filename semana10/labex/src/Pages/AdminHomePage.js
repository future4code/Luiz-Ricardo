import React from "react";
import { useHistory } from "react-router-dom";

export const AdminHomePage = () => {

    const history = useHistory()

    const voltar = () => {
    history.goBack()
    }

    const irParaCriacaoDeViagem = () => {
        history.push("/admin/trips/create")
    }

    const irParaViagemDaLista = () => {
        history.push("/admin/trips/:id")
    }

    return (
        <div>
            <h3>Painel Administrativo</h3>
            <button onClick = {voltar}>Voltar</button>
            <button onClick = {irParaCriacaoDeViagem}>Criar Viagem</button>
            <button>Logout</button>
            <button onClick = {irParaViagemDaLista}>Viagem da Lista</button>
        </div>
    )
}