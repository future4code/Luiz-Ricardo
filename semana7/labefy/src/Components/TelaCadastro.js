import React from "react";
import axios from "axios";

const headers = {
    headers: {
        Authorization: "luiz-silva-maryam"
    }
}

export default class TelaCadastro extends React.Component {
    state = {
        nomePlaylist: ""
    }

    inserirPlaylist = (event) => {
        this.setState({nomePlaylist: event.target.value})
    }

    adicionarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nomePlaylist
        }

        axios.post(url, body, headers)
        .then((response) => {
            alert("Playlist adicionada.")
            this.setState({nomePlaylist: ""})
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }
    
    render() {
      return (
        <div>
            <button onClick={this.props.irParaLista}>Ir para Playlist</button>
            <h2>Cadastro</h2>
            <input 
                placeholder={"Nome da Playlist"}
                value={this.state.nomePlaylist}
                onChange={this.inserirPlaylist}
            />
            <button onClick={this.adicionarPlaylist}>Adicionar</button>
        </div>
      )
    }
}