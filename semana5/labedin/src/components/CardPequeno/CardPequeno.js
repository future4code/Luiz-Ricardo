import React from 'react';
// import './CardPequeno.css'

// function CardPequeno(props) {
//     return (
//         <div className="peqcard-container">
//             <img src={ props.imagem } />
//             <div>
//                 <h4>{ props.nome }</h4>
//                 <p>{ props.descricao }</p>
//             </div>
//         </div>
//     )
// }

// export default CardPequeno;

import styled from 'styled-components';

const PeqContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const TamanhoImagem = styled.img `
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`
const Titulo = styled.h4 `
    margin-bottom: 15px;
    margin-right: 10px;
`
const Layout = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`
function CardPequeno(props) {
    return (
        <PeqContainer>
            <TamanhoImagem src={ props.imagem } />
            <Layout>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </Layout>
        </PeqContainer>
    )
}

export default CardPequeno;