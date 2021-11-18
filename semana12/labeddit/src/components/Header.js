import React, { useContext} from "react"
import { GlobalStateContext } from "../global/GlobalStateContext"
import { useHistory } from "react-router"
import { goToFeed, goToLogin } from "../routes/coordinator"
import { StyledToolbar } from "./styled"
import { AppBar, Button } from "@material-ui/core"

const Header = () => {   
    
    const history = useHistory()

    const {states, seters} = useContext (GlobalStateContext)

    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            goToLogin(history)
            seters.setRightButtonText("Login")
        } else {
            goToLogin(history)
        }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToFeed (history)} color="inherit">LabEddit</Button>
                <Button onClick={rightButtonAction} color="inherit">{states.rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header