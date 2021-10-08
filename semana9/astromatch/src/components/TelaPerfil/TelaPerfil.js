import React, {useState, useEffect} from "react";
import axios from "axios";
import {HeaderPerfil, CardPerfil, FooterPerfil} from "./Styles";

function TelaPerfil(props) {
    const [perfil, setPerfil] = useState([])

    const getPerfil = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-silva-maryam/person")
            .then((response) => {
                setPerfil(response.data.profile)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const toDeBoa = (profile) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-silva-maryam/choose-person"
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = {
            id: profile.id,
            choice: false
        }
        axios
            .post(url, body, headers)
            .then((response) => {
                getPerfil()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const aiSim = (profile) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-silva-maryam/choose-person"
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = {
            id: profile.id,
            choice: false
        }
        axios
            .post(url, body, headers)
            .then((response) => {
                getPerfil()                
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getPerfil()
    }, [])

    return (
        <div>
            <HeaderPerfil>
                <h3>Astromatch</h3>
                <button onClick={() => props.irParaMatches()}>Matches</button>
            </HeaderPerfil>
            <CardPerfil>
                <img src={perfil.photo} />
                <p><strong>{perfil.name}</strong>, {perfil.age}</p>
                <p>{perfil.bio}</p>
            </CardPerfil>
            <FooterPerfil>
                <button onClick={() => toDeBoa(perfil)}>to de boa</button>
                <button onClick={() => aiSim(perfil)}>ai sim</button>          
            </FooterPerfil>
        </div>
    );
}

export default TelaPerfil;