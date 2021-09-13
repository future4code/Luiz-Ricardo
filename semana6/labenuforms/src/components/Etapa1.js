import React from "react";
import styled from "styled-components";


const TelaPrincipal = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 25px;
`

class Etapa1 extends React.Component {
  render() {
    
    return (
        <TelaPrincipal>
            <h1>DADOS GERAIS</h1>
            <h3>Qual seu nome?</h3>
            <input/>
            <h3>Qual sua idade?</h3>
            <input/>
            <h3>Qual seu emal?</h3>
            <input/>
            <h3>Qual a sua escolaridade?</h3>
            <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select>
        </TelaPrincipal>
    );
  }
}

export default Etapa1;