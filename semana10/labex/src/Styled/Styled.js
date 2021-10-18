import styled from "styled-components";

// estilização da HomePage
export const HomePageContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
        margin-top: 10px;
    }
`

// estilização da ListTripsPage
export const ListTripsPageContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ButtonListTrips = styled.div `
    display: flex;
`
export const CardTrip = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        color: red;
    }
`

// estilização da ApplicationFormPage
export const ApplicationFormPageContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input {
        margin: 20px;
    }
    button {
        margin-top: 10px;
    }
`

// estilização da LoginPage
export const LoginPageContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ButtonLogin = styled.div `
    display: flex;
    margin: 10px;
    button {
        margin: 20px;
    }
`

// estilização da AdminHomePage
export const AdminHomePageContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ButtonAdminHome = styled.div `
    display: flex;
    margin: 10px;
    button {
        margin: 20px;
    }
`
export const ListTrip = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
        color: red;
    }
    button {
        margin-left: 5px;
    }
`

// estilização da TripDetailsPage
export const TripDetailsPageContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        color: red;
    }
`