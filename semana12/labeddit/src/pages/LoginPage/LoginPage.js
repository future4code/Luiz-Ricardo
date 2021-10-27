import React from "react";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";
import { ScreenContainer, SignUpButtonContainer } from "./styled";
import { Button } from "@material-ui/core";

const LoginPage = () => {

    const history = useHistory()

    return (
        <ScreenContainer>
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
        </ScreenContainer>
    )
}

export default LoginPage