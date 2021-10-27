import React from "react";
import SignUpForm from "./SignUpForm";
import { useHistory } from "react-router-dom";
import { goToLogin } from "../../routes/coordinator";
import { ScreenContainer, SignUpButtonContainer } from "./styled";
import { Button } from "@material-ui/core";

const SignUpPage = () => {

    const history = useHistory()

    return (
        <ScreenContainer>
            <Button
                onClick={() => goToLogin (history)}
                type={"submit"}
                fullWidth
                variant={"text"}
                color={"primary"}
            >
                Voltar
            </Button>
            <SignUpForm />
        </ScreenContainer>
    )
}

export default SignUpPage