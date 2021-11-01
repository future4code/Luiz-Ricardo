import React, { useContext } from "react"
import axios from "axios"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import useForm from "../../hooks/useForm"
import { BASE_URL } from "../../constants/urls"
import { FormContainer } from "./styled"
import { Button, TextField } from "@material-ui/core"

const ComentForm = (props) => {

    const { seters } = useContext (GlobalStateContext)
    
    const createComent = (id) => {

        const headers = {
            headers: { Authorization: localStorage.getItem ("token") }
        }

        axios
            .post(`${BASE_URL}/posts/${id}/comments`, form, headers)
            .then ((response) => {
                alert("Comentário Criado!")
                clear()
                seters.getPosts(response.data)
            }).catch ((error) => 
            alert (error.response.data.message)
            )
    }

    const [form, onChange, clear] = useForm ({body: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComent()
    }

    return (
        <FormContainer>
            <h2>Tem algo a comentar?</h2>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    label={"Comentário"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    Comentar
                </Button>
            </form>
        </FormContainer>
    )
}

export default ComentForm