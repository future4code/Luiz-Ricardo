import React, { useContext } from "react"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router-dom"
import { login } from "../../services/user"
import { InputsLoginForm } from "./styled"
import { Button, TextField } from "@material-ui/core"

const LoginForm = () => {

    const history = useHistory()

    const { seters } = useContext (GlobalStateContext)

    const [ form, onChange, clear ] = useForm ({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login (form, clear, history, seters.setRightButtonText)
    }

    return (
        <InputsLoginForm>
            <form onSubmit={onSubmitForm}>
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
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    Login
                </Button>
            </form>
        </InputsLoginForm>     
    )
}

export default LoginForm