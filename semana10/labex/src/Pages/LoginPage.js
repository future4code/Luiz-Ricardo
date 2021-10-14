import React from "react";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {

    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }

    const irParaPainelAdministrativo = () => {
        history.push("/admin/trips/list")
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick = {voltar}>Voltar</button>
            <button onClick = {irParaPainelAdministrativo}>Entrar</button>
        </div>
    )
}