import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SwapiServiceProvider } from "../SwapiServiceContext";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../Pages";
import ErrorBoundry from "../ErrorBoundry";
import SwapiService from "../../services/swapi-service";
import Layout from "../Layout/Layout";
import "./App.css";
import RandomPlanet from "../RandomPlanet";

class App extends React.Component {

    state = {
        swapiService: new SwapiService()
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }
  
    render() {

    return (
      <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
                <div className="stardb-app">
                    <Routes >
                        <Route path="/" element={<Layout />}>
                            <Route index element={<PeoplePage />}/>
                            <Route path="/people/" element={<PeoplePage/>}/>
                            <Route path="/planets/" element={<PlanetsPage/>}/>
                            <Route path="/starships/" element={<StarshipsPage/>} />
                            <Route path="*" element={<PeoplePage />}/>
                        </Route>
                    </Routes>
                </div>
          </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}


export default App;