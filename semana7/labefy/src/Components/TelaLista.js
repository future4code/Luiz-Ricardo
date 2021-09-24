import React from "react";
// import TelaMusica from "./Components/TelaMusica";
import axios from "axios";
import styled from "styled-components";

const CardNome = styled.div `
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const headers = {
    headers: {
        Authorization: "luiz-silva-maryam"
    }
}

export default class TelaLista extends React.Component {
    state = {
        playlist: [],
        idPlaylist: ""
    }

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, headers)
        .then((response) => {
            this.setState({playlist: response.data.result.list})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    pegarMusica = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        axios.get(url, headers)
        .then((response) => {
            this.setState({idPlaylist: response.data.result.list})
            console.log(response.data.result.list)
        })
        .catch((error) => {
            console.log(error)
        })

    }

    // adicionarMusica = (id) => {
    //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    //     const body = {
    //         name: this.state.nomeMusica,
    //         artist: this.state.nomeArtista,
    //         url: this.state.linkMusica
    //     }

    //     axios.post(url, body, headers)
    //     .then((response) => {
    //         alert("Música adicionada.")
    //         this.setState({nomeMusica: "", nomeArtista: "", linkMusica: ""})
    //     })
    //     .catch((error) => {
    //         alert(error.response.data.message)
    //     })
    // }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "luiz-silva-maryam"
            }
        })
        .then((response) => {
            alert("Playlist deletada!")
            this.pegarPlaylist()
        })
        .catch((error) => {
            alert("Erro, tente novamente.")
        })
    }
    
    render() {

        const listaDeNome = this.state.playlist.map((nome) => {
            return (
                <CardNome key={nome.id}>
                    {nome.name}
                    <button>Músicas</button>
                    <button onClick={() => this.deletarPlaylist(nome.id)}>X</button>
                </CardNome>
            )
        })

      return (
        <div>
            <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
            <h2>Playlist</h2>
            {listaDeNome}
        </div>
      )
    }
}