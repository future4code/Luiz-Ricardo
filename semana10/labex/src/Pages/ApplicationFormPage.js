import React from "react";
import { useHistory } from "react-router-dom";

export const ApplicationFormPage = () => {

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    return (
        <div>
            <h3>Inscreva-se para uma viagem</h3>
            <button onClick = {voltar}>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}