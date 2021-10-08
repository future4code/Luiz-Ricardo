import React, {useState, useEffect} from "react";
import axios from "axios";
import {HeaderMatches, CardPerfil} from "./Styles";

function TelaMatches(props) {

    useEffect(() => {
        getPerfisMatches()
    }, [])

    const [perfilDeMatches, setPerfilDeMatches] = useState([])
    
    const getPerfisMatches= () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-silva-maryam/matches")
            .then((response) => {
                setPerfilDeMatches(response.data.matches)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }    

    const listaDeMatches = perfilDeMatches.map((match) => {
        return (
            <CardPerfil>
                <img src={match.photo} />
                <h3>{match.name}</h3>
            </CardPerfil>
        )
    })

    

    return(
        <div>
            <HeaderMatches>
                <h3>Astromatch</h3>
                <button onClick={()=> props.irParaPerfil()}>Perfil</button>
            </HeaderMatches>
            <div>
                {listaDeMatches}
            </div>
        </div>
    )
}
  
export default TelaMatches;