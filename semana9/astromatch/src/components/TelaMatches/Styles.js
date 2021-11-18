import styled from "styled-components";

export const MatchesContainer = styled.div `
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    background-color: pink;
    height: 90vh;
    width: 40vw;
`

export const HeaderMatches = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`
export const CardMatches = styled.div `
    display: flex;
    padding: 5px;
    margin-bottom: 5px;
    width: 40vw;
    height: auto;
    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
    h3 {
        margin: 1vw;
    }
`