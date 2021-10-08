import React, {useState} from "react";
import axios from "axios";
import TelaPerfil from "./components/TelaPerfil/TelaPerfil";
import TelaMatches from "./components/TelaMatches/TelaMatches";
import styled from "styled-components";

const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  height: 100vh;
`

function App() {

  const [telaAtual, setTelaAtual] = useState ("perfil")

  const mudaTela = () => {
    switch (telaAtual) {
      case "perfil":
        return <TelaPerfil irParaMatches={irParaMatches} />
      case "matches":
        return <TelaMatches irParaPerfil={irParaPerfil} />
    }
  }

  const irParaPerfil = () => {
    setTelaAtual ("perfil")
  }

  const irParaMatches = () => {
    setTelaAtual ("matches")
  }

  // const limpar = () => {
  //   const url ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
  //   const headers = {
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  //   } 
  //   axios
  //     .put(url, headers)
  //     .then((response) => {
  //       alert(response.data.message)
  //       setTelaAtual()
  //     })
  //     .catch((error) => {
  //       console.log(error.response)
  //     })
  // }

  return (
    <AppContainer>
      {mudaTela()}
      {/* <button onClick={limpar}>Limpar</button> */}
    </AppContainer>
  );
}

export default App;