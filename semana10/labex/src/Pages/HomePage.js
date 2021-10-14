import React from "react";
import { useHistory } from "react-router-dom";

export const HomePage = () => {

    const history = useHistory()

    const irParaListaDeViagens = () => {
        history.push("/trips/list")
    }

    const irParaLogin = () => {
        history.push("/login")
    }

    return (
        <div>
            <h1>LabeX</h1>
            <button onClick = {irParaListaDeViagens}>Lista de Viagens</button>
            <button onClick = {irParaLogin}>Área Administrativa</button>
        </div>
    )
}