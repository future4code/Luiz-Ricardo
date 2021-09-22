import React from "react";
import axios from "react";

const headers = {
  headers: {
    Authorization: "luiz-silva-maryam"
  }
};


export default class App extends React.Component {
  state = {
    listaDeNome: [],
    nomeDaLista: "",
    emailDaLista: ""
  };

  // componentDidMount() {
  //   this.getAllPlaylists();
  // }

  onChangeInputNome = (event) => {
    this.setState({nomeDaLista: event.target.value})
  }




  render() {
    return(
      <div>
        <h1>Labenusers</h1>
        <button>Ir para página de lista</button>
        <div>
          <label>Nome:</label>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <label>Email:</label>
          <input
            value={this.state.valorInputEmail}
            onChange={this.onChangeInputEmail}
            placeholder={"Email"}
          />
        </div>
        <button onClick={this.adicionaPessoa}>Adicionar</button>
      </div>
    )
  }
}
