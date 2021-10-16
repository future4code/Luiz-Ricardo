import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ListTripsPageContainer, ButtonListTrips, CardTrip } from "../Styled/Styled"

export const ListTripsPage = () => {

    const [trips, setTrips] = useState ([])

    useEffect (() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-silva-maryam/trips")
            .then((response) => {
                setTrips(response.data.trips)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const detailsTrip = trips.map((trip) => {
        return(
            <CardTrip>
                <h3>{trip.name}</h3>
                <p><strong>Descrição:</strong> {trip.description}</p>
                <p><strong>Planeta:</strong> {trip.planet}</p>
                <p><strong>Duração:</strong> {trip.durationInDays}</p>
                <p><strong>Data:</strong> {trip.date}</p>
            </CardTrip>
        )
    })

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    return (
        <ListTripsPageContainer>
            <ButtonListTrips>
                <button onClick = {goBack}>Voltar</button>
                <button onClick = {goToApplicationFormPage}>Inscrever-se</button>
            </ButtonListTrips>
            <h2>Lista de Viagens</h2>
            {detailsTrip}
        </ListTripsPageContainer>
    )
}