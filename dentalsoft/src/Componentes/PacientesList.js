import React from 'react';
import PacienteForm from './PacientesForm';
import { firebase } from '../firebase-config';
const PacienteList =()=>
{
    const bd = firebase.firestore
    const addOrEditPaciente=(PacObject)=>{
        console.log('PacObject')
        
    }
    return <div>
        <PacienteForm addOrEditPaciente={addOrEditPaciente}/>
        <h1>Pacientes</h1>
    </div>
}

export default PacienteList;