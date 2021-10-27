import React from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styled";
import { Button, TextField } from "@material-ui/core";

const SignUpForm = () => {

    const [form, onChange, clear] = useForm ({name: "", email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={onSubmitForm}>
            <InputsContainer>            
                <TextField 
                    name={"name"}
                    value={form.name}
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
            </InputsContainer>    
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