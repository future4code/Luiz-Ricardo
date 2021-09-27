import React from "react";
import axios from "axios";

const headers = {
    headers: {
        Authorization: "luiz-silva-maryam"
    }
}

export default class TelaCadastro extends React.Component {
    state = {
        nomeMusica: "",
        nomeArtista: "",
        linkMusica: ""
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
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.TelaLista}/tracks`
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

      return (
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
            
            <button onClick={this.adicionarMusica}>Adicionar</button>
        </div>
      )
    }
}