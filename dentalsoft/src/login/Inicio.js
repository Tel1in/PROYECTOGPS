import React from "react";
import './Inicio.css'
import NavBar from "./NavBar";
import SpinnigText from "./SpinnigText";
import di1 from "../assets/images/di1.png"



function Inicio() {
  return (
    <>
    <NavBar />
    <div className="container">
        <div className="spT">
            <SpinnigText text={"DENTALSOFT"} > 
                <img src={di1} alt="di1" />
            </SpinnigText>
        </div>       
    </div>
</>
    
)}





export default Inicio;
