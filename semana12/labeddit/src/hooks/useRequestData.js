import axios from "axios"
import { useState, useEffect } from "react"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState (initialData)

    const getData = () => {
        axios
            .get (url, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then ((response) => {
                setData (response.data)
            }).catch ((error) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }
    
    useEffect(() => {
        getData()
    }, [url])

    return [data, getData]
}

export default useRequestData