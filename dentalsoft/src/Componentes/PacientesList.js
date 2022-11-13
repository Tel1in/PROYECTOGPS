import React from 'react';
import PacienteForm from './PacientesForm';
import { db } from '../firebase-config';
const PacienteList =()=>
{
    const addOrEditPaciente= async(PacObject)=>{
        console.log(PacObject)
        await db.collection('Pacientes').doc().set(PacObject)        
    }
    return <div>
        <PacienteForm addOrEditPaciente={addOrEditPaciente}/>
        <h1>Pacientes</h1>
    </div>
}

export default PacienteList;