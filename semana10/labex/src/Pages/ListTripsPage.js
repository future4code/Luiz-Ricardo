import React from "react";
import { useHistory } from "react-router-dom";

export const ListTripsPage = () => {

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    const irParaInscricaoDeViagens = () => {
        history.push("/trips/application")
    }

    return (
        <div>
            <h1>Lista de Viagens</h1>
            <button onClick = {voltar}>Voltar</button>
            <button onClick = {irParaInscricaoDeViagens}>Inscrever-se</button>
        </div>
    )
}