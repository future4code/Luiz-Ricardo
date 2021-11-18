import React, {useState, useEffect} from "react";
import axios from "axios";
import {MatchesContainer, HeaderMatches, CardMatches} from "./Styles";

function TelaMatches(props) {
    
    const getMatches = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-silva-maryam/matches")
            .then((response) => {
                props.setMatches(response.data.matches)
            })
            .catch((error) => {
                console.log(error)
            })
    } 
    
    useEffect(() => {
        getMatches()
    }, [])

    const listaDeMatches = props.matches.map((match) => {
        return (
            <CardMatches>
                <img src={match.photo} />
                <h3>{match.name}</h3>
            </CardMatches>
        )
    })  

    return(
        <MatchesContainer>
            <HeaderMatches>
                <h1>Astromatch</h1>
                <button onClick={()=> props.irParaPerfil()}>Perfil</button>
            </HeaderMatches>
            {listaDeMatches}
        </MatchesContainer>
    )
}
  
export default TelaMatches;