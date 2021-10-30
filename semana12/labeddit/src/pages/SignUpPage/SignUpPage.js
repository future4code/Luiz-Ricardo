import React from "react"
import SignUpForm from "./SignUpForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { useHistory } from "react-router-dom"
import { goToLogin } from "../../routes/coordinator"
import { SignUpContainer } from "./styled"
import { Button } from "@material-ui/core"

const SignUpPage = () => {

    useUnprotectedPage()

    const history = useHistory()

    return (
        <SignUpContainer>
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
        </SignUpContainer>
    )
}

export default SignUpPage