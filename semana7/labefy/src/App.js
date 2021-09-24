import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaLista from "./Components/TelaLista";
import TelaMusica from "./Components/TelaMusica";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaLista irParaCadastro={this.irParaCadastro}/>
      // case "lista":
      //   return <TelaLista irParaMusica={this.irParaMusica}/>
      // case "musica":
      //   return <TelaMusica irParaLista={this.irParaLista}/>
      default:
        return <div>Página não existente!</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  // irParaMusica = () => {
  //   this.setState({telaAtual: "musica"})
  // }

  render() {
    return (
      <div>
        {this.escolherTela()}
        <TelaMusica />
      </div>
    )
  }
}