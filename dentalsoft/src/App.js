import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./login/Login";
import Inicio from "./login/Inicio";
import Registrar from "./login/Registrar";
import CitasD from "./Doctora/CitasD";
import UserD from "./Doctora/UserD"

function App(){
  return(
      <div>
        <Router>
          <Routes > 
            <Route path="/" element={<Inicio />}  />
            <Route path="/Login" element={<Login />}/>
            <Route path="/Registrar" element={<Registrar />}/>
            <Route path="/dashboard/CitasD" element={<CitasD />}/>
            <Route path="/dashboard/UserD" element={<UserD />}/>
          </Routes>
        </Router>
      </div>     
  );
};

export default App;