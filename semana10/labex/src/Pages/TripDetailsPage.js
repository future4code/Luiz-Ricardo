import React from "react";
import { useHistory } from "react-router-dom";

export const TripDetailsPage = () => {

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    return (
        <div>
            <h3>Titulo da viagem</h3>
            <button onClick = {voltar}>Voltar</button>
            <h3>Candidatos Pendentes</h3>
            <button>Aprovar</button>
            <button>Reprovar</button>
            <h3>Candidatos Aprovados</h3>
        </div>
    )
}