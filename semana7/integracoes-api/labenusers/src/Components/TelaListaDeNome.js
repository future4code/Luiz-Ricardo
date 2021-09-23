import React from "react";
import axios from "axios";
import styled from "styled-components";

const Layout = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CardNome = styled.div `
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default class TelaListaDeNome extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "luiz-silva-maryam"
            }
        })
        .then((response) => {
            this.setState({usuarios: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "luiz-silva-maryam"
            }
        })
        .then((response) => {
            alert("Usuário(a) deletado(a)!")
            this.pegarUsuarios()
        })
        .catch((error) => {
            alert("Erro, tente novamente.")
        })
    }

    render(){
        
        const listaDeNome = this.state.usuarios.map((usuario) => {
            return (
                <CardNome key={usuario.id}>
                    {usuario.name}
                    <button onClick={() => this.deletarUsuario(usuario.id)}>X</button>
                </CardNome>
            )
        })

        return (
            <Layout>
                <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
                <h1>Lista de Nome</h1>
                {listaDeNome}
            </Layout>
        )
    }
}