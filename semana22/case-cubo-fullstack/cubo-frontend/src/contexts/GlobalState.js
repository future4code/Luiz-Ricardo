import { useRequestData } from "../hooks/useRequestData"
import { baseURL } from "../contants/baseURL"
import { GlobalContext } from "./GlobalContext"

const GlobalState = ({ children }) => {
    const [users, requestUser] =  useRequestData([],
         `${baseURL}/user/all`)

    const states = { users }
    
    const request = { requestUser }

    return <GlobalContext.Provider value={{ states, request }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalState