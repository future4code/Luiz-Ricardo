import GlobalStateContext from '../../contexts/GlobalContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Select from '../../components/Select'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { PageContainer, SideBar, Title, Text, WhiteBar, NumbersDad, Numbers, TextStyle } from './styled'

const Contests = () => {

    const {concurso} = useParams()
    
    const { lotteries, contests } = useContext(GlobalStateContext)

    const [sortitionDetails, setSortitionDetails] = useState()    

    useEffect(() => {
        
        if (lotteries && contests) {
            
            const lotteryIndex = lotteries && lotteries.findIndex((item) => {
                return item.nome === concurso.replace(/\+/g, " ")
            })
            
            const contestIndex = contests && contests.findIndex((item) => {
                return item.loteriaId === lotteries[lotteryIndex].id
            })
    
            const sortition = contests && contests[contestIndex] && contests[contestIndex].concursoId
    
            sortition && getSortitionDetail(sortition)

        }
        
    }, [concurso, lotteries])

    const getSortitionDetail = (contestsId) => {
        axios
            .get(`${BASE_URL}/concursos/${contestsId}`)
            .then((response) => {
                setSortitionDetails(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const numbers = sortitionDetails && sortitionDetails.numeros.map((item, index) => {
        return <Numbers key={index}>{item}</Numbers>
    })

    const titleConcursos = {
        "mega-sena": "MEGA-SENA",
        "quina": "QUINA",
        "lotofácil": "LOTOFACIL",
        "lotomania": "LOTOMANIA",
        "timemania": "TIMEMANIA",
        "dia+de+sorte": " DIA DE SORTE"
    }

    return (
        <PageContainer concurso = {concurso}>
            <SideBar concurso = {concurso}>
                <Select/>
                <Title>                  
                    {titleConcursos[concurso]}
                </Title>

                <Text>
                    concurso<br/>
                    <b>4531 - 07/04/2020</b>
                </Text>
            </SideBar>

            <WhiteBar>
                <NumbersDad>
                    {numbers}
                </NumbersDad>
                <br/>
                <TextStyle>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</TextStyle>
            </WhiteBar>
        </PageContainer>
    )
}

export default Contests