import React from "react";
import styled from "styled-components";


const TelaPrincipal = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 25px;
`

class Etapa2 extends React.Component {
  render() {
    
    return (
        <TelaPrincipal>
            <h1>INFORMAÇÕES DO ENSINO SUPERRIOR</h1>
            <h3>Qual curso?</h3>
            <input/>
            <h3>Qual a unidade de ensino?</h3>
            <input/>
        </TelaPrincipal>
    );
  }
}

export default Etapa2;