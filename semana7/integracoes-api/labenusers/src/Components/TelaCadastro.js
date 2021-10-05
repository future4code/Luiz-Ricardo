import React from "react";
import axios from "axios";
import styled from "styled-components";

const Layout = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    inserirNome = (event) => {
        this.setState({nome: event.target.value})
    }

    inserirEmail = (event) => {
        this.setState({email: event.target.value})
    }

    salvarCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "luiz-silva-maryam"
            }
        })
        .then((response) => {
            alert("Usuário(a) cadastrado(a).")
            this.setState({nome: "", email: ""})
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }

    render(){
        return (
            <Layout>
                <button onClick={this.props.irParaLista}>Ir para lista de nome</button>
                <h1>Cadastro</h1>
                <input 
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.inserirNome}
                />
                <br></br>
                <input 
                    placeholder={"Email"}
                    value={this.state.email}
                    onChange={this.inserirEmail}
                />
                <br></br>
                <button onClick={this.salvarCadastro}>Salvar</button>
            </Layout>
        )
    }
}