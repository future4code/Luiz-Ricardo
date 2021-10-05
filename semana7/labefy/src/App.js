import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaLista from "./Components/TelaLista";
import styled from "styled-components";

const DivApp = styled.div `
  background-color: #ebeff3;
  padding: 10px;
  height: 100vh;
`

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

  render() {
    return (
      <DivApp>
        {this.escolherTela()}
      </DivApp>
    )
  }
}