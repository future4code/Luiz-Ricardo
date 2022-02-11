import GlobalStateContext from "./GlobalContext"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"

const GlobalState = (props) => {

    const [lotteries, setLotteries] = useState()

    const [contests, setContests] = useState()

    const getLotteries = () => {
        axios
            .get(`${BASE_URL}/loterias`)
            .then((response) => {
                setLotteries(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const getContests = () => {
        axios
            .get(`${BASE_URL}/loterias-concursos`)
            .then((response) => {
                setContests(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    useEffect (() => {
        getLotteries()
        getContests()
    }, [])

    const data = { lotteries, getLotteries, contests, getContests } 

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState