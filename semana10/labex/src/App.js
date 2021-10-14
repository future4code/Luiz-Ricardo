import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AdminHomePage } from "./Pages/AdminHomePage";
import { ApplicationFormPage } from "./Pages/ApplicationFormPage";
import { CreateTripPage } from "./Pages/CreateTripPage";
import { HomePage } from "./Pages/HomePage";
import { ListTripsPage } from "./Pages/ListTripsPage";
import { LoginPage } from "./Pages/LoginPage";
import { TripDetailsPage } from "./Pages/TripDetailsPage";
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/trips/application"}>
          <ApplicationFormPage />
        </Route>
        
        <Route exact path={"/admin/trips/list"}>
          <AdminHomePage />
        </Route>
        
        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>
        
        <Route exact path={"/admin/trips/:id"}>
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
