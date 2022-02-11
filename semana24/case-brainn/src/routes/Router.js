import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contests from '../pages/Contests/Contests'

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home/>}/>

                <Route path="/:concurso" element={<Contests/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router