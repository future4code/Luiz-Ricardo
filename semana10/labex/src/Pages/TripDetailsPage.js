import React, { useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../Hooks/UseProtectedPage";
import { TripDetailsPageContainer } from "../Styled/Styled"

export const TripDetailsPage = () => {

    const [trip, setTrip] = useState ([])

    const history = useHistory()
        useProtectedPage()

    const params = useParams()

    const voltar = () => {
        history.goBack()
    }

    useEffect (() => {
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-silva-maryam/trip/${params.id}`
        const headers = {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        }
        axios
            .get(url, headers)
            .then((response) => {
            setTrip(response.data.trip)
            })
            .catch((error) => {
            console.log(error.response)
            })
    }, [])

    const tripDetails = () => {
        return (
            <div key={trip.id}>
                <div>
                    <h3>{trip.name} </h3>
                    <p>
                        <b>Descrição:</b> {trip.description}
                    </p>
                    <p>
                        <b>Planeta destino:</b> {trip.planet}{" "}
                    </p>
                    <p>
                        <b>Data de embarque:</b> {trip.date}
                    </p>
                    <p>
                        <b>Duração da viagem:</b> {trip.durationInDays} dias
                    </p>
                    <h3>Lista de Candidatos</h3>
                </div>
            </div>
        )
    }

    return (
        <TripDetailsPageContainer>
            <button onClick = {voltar}>Voltar</button>
            <h2>Detalhes da Viagem</h2>
            {tripDetails()}
        </TripDetailsPageContainer>
    )
}