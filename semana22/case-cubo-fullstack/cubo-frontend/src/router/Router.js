import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from './../page/Error/Error'
import Home from './../page/Home/Home'

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
}

export default Router