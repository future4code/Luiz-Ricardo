import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectStyle, OptionStyle } from './styled'

const Select = () => {

    const navigate = useNavigate()

    const changeSelect = (event) => {
        event.preventDefault()
        navigate(`/${event.target.value}`)
    }

    return (
        <SelectStyle label={"Loterias"} onChange = {changeSelect}>
            <OptionStyle>Selecione</OptionStyle>
            <OptionStyle value="mega-sena">MEGA-SENA</OptionStyle>
            <OptionStyle value="quina">QUINA</OptionStyle>
            <OptionStyle value="lotofácil">LOTOFACIL</OptionStyle>
            <OptionStyle value="lotomania">LOTOMANIA</OptionStyle>
            <OptionStyle value="timemania">TIMEMANIA</OptionStyle>
            <OptionStyle value="dia+de+sorte">DIA DE SORTE</OptionStyle>
        </SelectStyle>
    )
}

export default Select