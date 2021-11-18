import React, {useState} from "react";
import axios from "axios";
import TelaPerfil from "./components/TelaPerfil/TelaPerfil";
import TelaMatches from "./components/TelaMatches/TelaMatches";
import styled from "styled-components";

const AppContainer = styled.div `
  margin: 0;
  padding: 0;
  background-color: purple;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Botao = styled.div `
  position: fixed;
  bottom: 15px;
  right: 15px;
`

function App() {

  const [telaAtual, setTelaAtual] = useState ("perfil")

  const [matches, setMatches] = useState([])

  const mudaTela = () => {
    switch (telaAtual) {
      case "perfil":
        return <TelaPerfil irParaMatches={irParaMatches} />
      case "matches":
        return <TelaMatches 
                  irParaPerfil={irParaPerfil}
                  matches={matches}
                  setMatches={setMatches}
                />
    }
  }

  const irParaPerfil = () => {
    setTelaAtual ("perfil")
  }

  const irParaMatches = () => {
    setTelaAtual ("matches")
  }

  const limpar = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-silva-maryam/clear"
    const headers = {
      headers: {
          'Content-Type': 'application/json'
      }
    } 
    axios
      .put(url, headers)
      .then((response) => {
        setMatches([])
        alert("Lista de Matches Apagada!")
        
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <AppContainer>
      {mudaTela()}
      <Botao>
        <button onClick={limpar}>Limpar</button>
      </Botao>
    </AppContainer>
  );
}

export default App;