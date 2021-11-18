import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { goToFeed } from "../routes/coordinator";

const useUnprotectedPage = () => {

    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem ("token")
        if (token) {
            goToFeed (history)
        }
    }, [history])
}

export default useUnprotectedPage