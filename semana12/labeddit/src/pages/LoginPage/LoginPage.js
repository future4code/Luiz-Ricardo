import React from "react"
import LoginForm from "./LoginForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { useHistory } from "react-router-dom"
import { goToSignUp } from "../../routes/coordinator"
import { LoginContainer, SignUpButtonContainer } from "./styled"
import { Button } from "@material-ui/core"

const LoginPage = () => {

    useUnprotectedPage()

    const history = useHistory()

    return (
        <LoginContainer>
            <h1>LabEddit</h1>
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp (history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Não possui conta? Cadastre-se aqui!
                </Button>
            </SignUpButtonContainer>
        </LoginContainer>
    )
}

export default LoginPage