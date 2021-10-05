import React from "react";
// import TelaMusica from "./Components/TelaMusica";
import axios from "axios";
import styled from "styled-components";

const CardNome = styled.div `
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    width: 500px;
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
        playlistMusica: [],
        nomeMusica: "",
        nomeArtista: "",
        linkMusica: ""
    }

    componentDidMount() {
        this.pegarPlaylist()
        this.pegarMusica ()
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
            this.setState({playlistMusica: response.data.result.tracks})
            console.log(response.data.result)
        })
        .catch((error) => {
            console.log(error)
        })

    }

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

    inserirMusica = (event) => {
        this.setState({nomeMusica: event.target.value})
    }

    inserirArtista = (event) => {
        this.setState({nomeArtista: event.target.value})
    }

    inserirUrl = (event) => {
        this.setState({linkMusica: event.target.value})
    }

    adicionarMusica = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.nomeArtista,
            url: this.state.linkMusica
        }

        axios.post(url, body, headers)
        .then((response) => {
            alert("Música adicionada.")
            this.setState({nomeMusica: "", nomeArtista: "", linkMusica: ""})
        })
        .catch((error) => {
            console.log(error.response.data)
            // alert(error.response.data.message)

        })
    }
    
    render() {

        const listaDeNome = this.state.playlist.map((nome) => {
            return (
                <CardNome key={nome.id}>
                    {nome.name}
                    <button onClick={() => this.pegarMusica(nome.id)}>Músicas</button>
                    <button onClick={() => this.adicionarMusica(nome.id)}>Adicionar</button>
                    <button onClick={() => this.deletarPlaylist(nome.id)}>X</button>
                </CardNome>
            )
        })

        const musica = this.state.playlistMusica.map((music) => {
            return (
                <div key={music.id}>
                    {music.name} - {music.artist}
                </div>
            )
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
                <h2>Playlist</h2>
                {listaDeNome} {musica}
                <br></br>
                <div>
                    <h2>Adicionar Música</h2>
                    <input 
                        placeholder={"Nome da Música"}
                        value={this.state.nomeMusica}
                        onChange={this.inserirMusica}
                    />
                    <br></br>
                    <input 
                        placeholder={"Nome do Artista"}
                        value={this.state.nomeArtista}
                        onChange={this.inserirArtista}
                    />
                    <br></br>
                    <input 
                        placeholder={"Link da Música"}
                        value={this.state.linkMusica}
                        onChange={this.inserirUrl}
                    />
                </div>
            </div>
       )
    }
}