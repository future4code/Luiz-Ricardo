import React from 'react';
// import './ImagemButton.css'

// function ImagemButton(props) {
//     return (
//         <div className="image-button-container">
//             <img src={ props.imagem }/>
//             <p>{ props.texto }</p>
//         </div>

//     )
// }

// export default ImagemButton;

import styled from 'styled-components';

const ButtonContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`
const ImagensButton = styled.img `
    width: 30px;
    margin-right: 10px;
`
function ImagemButton(props) {
    return (
        <ButtonContainer>
            <ImagensButton src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ButtonContainer>
    )
}

export default ImagemButton;