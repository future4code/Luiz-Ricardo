import React, { useState, useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../Hooks/UseProtectedPage";
import { AdminHomePageContainer, ButtonAdminHome, ListTrip } from "../Styled/Styled"

export const AdminHomePage = () => {

    const [tripsList, setTripsList] = useState ([])

    useEffect (() => {
        getTrips()
    }, [])

    const history = useHistory()
        useProtectedPage()

    const goBack = () => {
        history.goBack()
    }

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const logOut = () => {
        window.localStorage.removeItem("token")
        history.push("/login")
    }

    const goToTripDetailsPage = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    const getTrips = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-silva-maryam/trips")
            .then((response) => {
                setTripsList(response.data.trips)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const deleteTrip = (id) => {
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-silva-maryam/trips/${id}`
        const headers = {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        }
        axios
            .delete(url, headers)
            .then((response) => {
                alert("Viagem Deletada!")
            })
            .catch((error) => {
                alert("Algo Deu Errado!")
            })
    }

    const listTrips = tripsList.map((trip) => {
        return (
            <ListTrip key={trip.id}>
                <h3 onClick = {() => goToTripDetailsPage(trip.id)}>
                    {trip.name}
                </h3>
                <button onClick = {() => deleteTrip(trip.id)}>
                    X
                </button>
            </ListTrip>
        )
    })

    return (
        <AdminHomePageContainer>
            <h2>Painel Administrativo</h2>
            <ButtonAdminHome>
                <button onClick = {goBack}>Voltar</button>
                <button onClick = {goToCreateTripPage}>Criar Viagem</button>
                <button onClick = {logOut}>Logout</button>
            </ButtonAdminHome>
            {listTrips}
        </AdminHomePageContainer>
    )
}