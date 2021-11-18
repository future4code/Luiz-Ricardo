import React, { useContext } from "react"
import axios from "axios"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import useForm from "../../hooks/useForm"
import { BASE_URL } from "../../constants/urls"
import { FormContainer } from "./styled"
import { Button, TextField } from "@material-ui/core"

const PostForm = (props) => {

    const { seters } = useContext (GlobalStateContext)
    
    const createPost = () => {

        const headers = {
            headers: { Authorization: localStorage.getItem ("token") }
        }

        axios
            .post(`${BASE_URL}/posts`, form, headers)
            .then ((response) => {
                alert("Post Criado!")
                clear()
                seters.getPosts(response.data)
            }).catch ((error) => 
            alert (error.response.data.message)
            )
    }

    const [form, onChange, clear] = useForm ({title: "", body: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost()
    }

    return (
        <FormContainer>
            <h2>Crie seu Post</h2>
            <form onSubmit={onSubmitForm}>
                <TextField 
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"Titulo do Post"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                />
                <TextField
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    label={"Post"}
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
                    Postar
                </Button>
            </form>
        </FormContainer>
    )
}

export default PostForm