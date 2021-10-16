import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "../Hooks/UseForm";
import { countries } from "../Country/Countries";
import { ApplicationFormPageContainer } from "../Styled/Styled"

export const ApplicationFormPage = () => {

    const [tripsName, setTripsName] = useState ([])
    const [tripsId, setTripsId] = useState ("")
    const [form, onChange, cleanFields] = useForm (
        {
            name: "",
            age: "",
            applicationText: "",
            profession: "",
            country: ""
        }
    )

    useEffect (() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-silva-maryam/trips")
            .then((response) => {
                setTripsName(response.data.trips)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const nameTrips = tripsName.map((trip) => {
        return (
            <option key={trip.id} value={trip.id}>
                {trip.name}
            </option>
        )
    })

    const postApplyToTrip = () => {
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-silva-maryam/trips/${tripsId}/apply`, form)
            .then((response) => {
                console.log("ok", response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onChangeTrip = (event) => {
        setTripsId(event.target.value)
    }

    const submitForm = (event) => {
        event.preventDefault();
        postApplyToTrip();
        cleanFields()
    }

    const listCountries = countries.map((country) => {
        return (
            <option key={country} value={country}>
                {country}
            </option>
        )
    })

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <ApplicationFormPageContainer>
            <h2>Inscreva-se para uma viagem</h2>
            <form onSubmit={submitForm}>
                <select defaultValue="" onChange={onChangeTrip}>
                    <option value={""} disabled>
                        Escolha uma Viagem
                    </option>
                    {nameTrips}
                </select>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    required
                    min={18}
                />
                <input
                    placeholder={"Texto de Candidatura"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    pattern={"^.{30,}$"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                    required
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    pattern={"^.{10,}$"}
                    title={"A profissão deve ter no mínimo 10 caracteres"}
                    required
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>
                        Escolha um Pais
                    </option>
                    {listCountries}
                </select>
                <button>Enviar</button>
            </form>
            <button onClick = {goBack}>Voltar</button>
        </ApplicationFormPageContainer>
    )
}