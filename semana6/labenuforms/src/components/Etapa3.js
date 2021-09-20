import React from "react";
import styled from "styled-components";


const TelaPrincipal = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 25px;
`

class Etapa3 extends React.Component {
  render() {
    
    return (
        <TelaPrincipal>
            <h1>INFORMAÇÕES GERAIS DE ENSINO</h1>
            <h3>Por que você não terminou um curso de graduação?</h3>
            <input></input>
            <h3>Você fez algum curso complementar?</h3>
            <select>
                <option value="Nenhum">Nenhum</option>
                <option value="Curso técnico">Curso técnico</option>
                <option value="Curso de inglês">Curso de inglês</option>
            </select>
        </TelaPrincipal>
    );
  }
}

export default Etapa3;