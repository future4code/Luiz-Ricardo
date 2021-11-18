import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

const headers = {
    headers: { 'Content-Type': 'application/json'}
}

export const login = (body, clear, history) => {
    axios
        .post (`${BASE_URL}/users/login`, body, headers)
        .then ((response) => {
            localStorage.setItem ("token", response.data.token)
            clear()
            goToFeed (history)
        }).catch ((error) => 
            alert (error.response.data.message)
        )
}

export const signUp = (body, clear, history) => {
    axios
        .post (`${BASE_URL}/users/signup`, body, headers)
        .then ((response) => {
            localStorage.setItem ("token", response.data.token)
            clear()
            goToFeed (history)
        }).catch ((error) => 
            alert (error.response.data.message)
        )
}