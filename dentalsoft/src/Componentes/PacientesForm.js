import { useState } from "react";
import React from 'react';

const PacienteForm =(props)=>
{
    const initialStateValues={
        nombre:'',
        apellido:''}
    const [values,setValues] = useState(initialStateValues)
    const handleImputChange = e =>
    {
        const {name,value}=e.target
        setValues({...values,[name]:value})
        console.log (name,value)
        
    }
    const handleSubmit = e =>{
        e.preventDefault();
        //console.log(values)
        props.addOrEditPaciente(values);}
    return (
        <form className='card card-body'onSubmit={handleSubmit}>
            <div className='form-group'>
                <input type ="text" className='form-control' placeholder='nombre' name ='nombre' onChange={handleImputChange}/>
            </div>
            <div className='form-group inputgroup'>
                <input type ="text" className='form-control' placeholder='apellido' name ='apellido' onChange={handleImputChange}/>
            </div>
            <button className='btn btn-primary btn-block'>Save</button>
            
        </form>
    );
}
export default PacienteForm;