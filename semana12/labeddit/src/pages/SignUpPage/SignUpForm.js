import React from "react"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router"
import { signUp } from "../../services/user"
import { InputsSignUp } from "./styled"
import { Button, TextField } from "@material-ui/core"

const SignUpForm = () => {

    const history = useHistory()

    const [ form, onChange, clear ] = useForm ({username: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp (form, clear, history)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <InputsSignUp>            
                <TextField 
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    autoFocus
                />
                <TextField 
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField 
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />
            </InputsSignUp>    
            <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
            >
                Fazer Cadastro
            </Button>
        </form>    
    )
}

export default SignUpForm