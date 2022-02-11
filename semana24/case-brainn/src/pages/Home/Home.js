import React from 'react'
import Select from '../../components/Select'
import { PageContainer, Logo } from './styled'
import  Icon  from '../../img/Icon.png'

const Home = () => {  

    return (
        <PageContainer>
            <Logo src={Icon}/>
            <h1> Selecione um Concurso da Loteria</h1>
            <Select/>
        </PageContainer>
    )
}

export default Home