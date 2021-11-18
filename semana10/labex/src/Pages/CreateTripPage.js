import React from "react";
import { useHistory } from "react-router-dom";

export const CreateTripPage = () => {

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    return (
        <div>
            <h3>Criar Viagem</h3>
            <button onClick = {voltar}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}