import React from "react";
import { useHistory } from "react-router-dom";
import { HomePageContainer } from "../Styled/Styled"

export const HomePage = () => {

    const history = useHistory()

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <HomePageContainer>
            <h1>LabeX</h1>
            <button onClick = {goToListTripsPage}>Lista de Viagens</button>
            <button onClick = {goToLoginPage}>Área Administrativa</button>
        </HomePageContainer>
    )
}