import { GlobalStateContext } from "./GlobalStateContext"
import useRequestData from "../hooks/useRequestData"
import { BASE_URL } from "../constants/urls"
import { useState } from "react"

const GlobalState = (props) => {

    const token = localStorage.getItem ("token")

    const [posts, getPosts] = useRequestData ([], `${BASE_URL}/posts`)

    const [rightButtonText, setRightButtonText] = useState (token ? "Logout" : "Login")

    const states = { posts, rightButtonText }

    const seters = { getPosts, setRightButtonText }

    return (
        <GlobalStateContext.Provider value={{states, seters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState