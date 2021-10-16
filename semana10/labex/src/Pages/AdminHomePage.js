// import React, { useState, useEffect} from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// export const AdminHomePage = () => {

//     const [trips, setTrips] = useState ([])

//     useEffect (() => {
//         getTrips()
//     }, [])

//     const getTrips = () => {
//         axios
//             .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-silva-maryam/trips")
//             .then((response) => {
//                 setTrips(response.data.trips)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     const listTrip = trips.map((trip) => {
//         history.push("/admin/trips/:id")
//         return(
//             <div>
//                 <h3>{trip.name}</h3>
//             </div>
//         )
//     })

//     const history = useHistory()

//     const goBack = () => {
//     history.goBack()
//     }

//     const irParaCriacaoDeViagem = () => {
//         history.push("/admin/trips/create")
//     }

//     // const irParaViagemDaLista = () => {
//     //     history.push("/admin/trips/:id")
//     // }

//     return (
//         <div>
//             <h3>Painel Administrativo</h3>
//             <button onClick = {goBack}>Voltar</button>
//             <button onClick = {irParaCriacaoDeViagem}>Criar Viagem</button>
//             <button>Logout</button>
//             {/* <button onClick = {irParaViagemDaLista}>Viagem da Lista</button> */}
//             {listTrip}
//         </div>
//     )
// }