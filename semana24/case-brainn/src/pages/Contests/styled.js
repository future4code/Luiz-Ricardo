import styled from "styled-components"

const wallpaper = {
    "mega-sena": "#6BEFA3",
    "quina": "#8666EF",
    "lotofácil": "#DD7AC6",
    "lotomania": "#FFAB64",
    "timemania": "#5AAD7D",
    "dia+de+sorte": "#BFAF83"
}

export const PageContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    width: 100vW;
    height: 100vH;
    background: ${(p) => wallpaper[p.concurso]};
`

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30vW;
    height: 100vH;
    background: ${(p) => wallpaper[p.concurso]};
`

export const Title = styled.p`
    display: flex;
    font-size: xX-large;
    font-family: -webkit-pictograph;
    color: white;
`

export const Text = styled.p`
    font-size: medium;
    font-family: -webkit-pictograph;
    color: white;
`

export const WhiteBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70vW;
    height: 100vH;
    border-radius: 5vW 0vW 0vW 5vW;
    background-color: #EFEFEF;
`

export const NumbersDad = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-wrap: wrap;
`

export const Numbers = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7vW;
    height: 15vH;
    font-size: xxx-large;
    font-family: -webkit-pictograph;
    border-radius: 10vW;
    background-color: white;
    margin: 1vH;
`

export const TextStyle = styled.p`
    font-size: small;
    font-family: -webkit-pictograph;
`