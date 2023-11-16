import React from "react";
import CarForm from "./componens/CarForm";
import CarList from "./componens/CarList";
import CarSearch from "./componens/CarSearch";
import CarValue from "./componens/CarValue";
function App(){
    return <div className="container is-fluid">
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
    </div>
}

export default App;