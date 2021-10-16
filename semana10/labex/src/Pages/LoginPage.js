import React, { useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { LoginPageContainer, ButtonLogin } from "../Styled/Styled"

export const LoginPage = () => {

    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeSenha = (event) => {
      setPassword(event.target.value)
    }

    const postLogin = () => {
        console.log(email, password);
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-silva-maryam/login"
        const body = {
          email: email,
          password: password
        }
        axios
          .post(url, body)
          .then((response) => {
            localStorage.setItem("token", response.data.token)
            history.push("/admin/trips/list")
          })
          .catch((error) => {
            alert("Email/Senha Incorreto!")
          })
      };

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <LoginPageContainer>
            <h2>Login</h2>
            <input
                placeholder={"Email"}
                value={email}
                onChange={onChangeEmail}
            />
            <input
                placeholder={"Senha"}
                value={password}
                onChange={onChangeSenha}
            />
            <ButtonLogin>
              <button onClick = {goBack}>Voltar</button>
              <button onClick = {postLogin}>Entrar</button>
            </ButtonLogin>
        </LoginPageContainer>
    )
}