import React from 'react';
// import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from "./img/foto.jpg"
import foto2 from "./img/icone-email.png"
import foto3 from "./img/icone-endereço.png"
import styled from 'styled-components';

const LayoutGeral = styled.div `
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`
const Maim = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const SecaoContainer = styled.div `
  width: 40vw;
  margin: 10px 0;
`
const Titulo = styled.h2 `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <LayoutGeral>
      <Maim>
        <SecaoContainer>
          <Titulo>Dados pessoais</Titulo>
          <CardGrande 
            imagem={foto}
            nome="Luiz Ricardo da Silva" 
            descricao="Oi, eu sou o Luiz Ricardo. Sou estudante da Labenu e estou cursando Web Full Stack."
          />
        
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
            texto="Ver mais"
          />

          <CardPequeno
            imagem={foto2}
            nome="Email:"
            descricao="luizone@gmail.com"
          />

          <CardPequeno
            imagem={foto3}
            nome="Endereço:"
            descricao="Acredita, 22"
          />  
        </SecaoContainer>

        <SecaoContainer>
          <Titulo>Experiências profissionais</Titulo>
          <CardGrande 
            imagem="" 
            nome="Illes Café e Bistrô" 
            descricao="Organização do ambiemte, atendimento aos pedidos dos clientes, elaboração de bebidas (barista júnior)." 
          />
        
          <CardGrande 
            imagem="" 
            nome="Évora News Corretora de Seguros Ltda" 
            descricao="Auxiliar Administrativo Jr." 
          />
        </SecaoContainer>

        <SecaoContainer>
          <Titulo>Minhas redes sociais</Titulo>
          <ImagemButton 
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
            texto="Facebook" 
          />        

          <ImagemButton 
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
            texto="Twitter" 
          />        
        </SecaoContainer>
      </Maim>
    </LayoutGeral>
  );
}

export default App;