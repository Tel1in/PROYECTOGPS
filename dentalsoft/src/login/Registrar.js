import React  from 'react'
import { useForm } from 'react-hook-form'
import NavBar from './NavBar';
import './registrar.css'


function Registrar() {

  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => {};
  

  return (
    <div className="Registrar">
      <NavBar />
      <div className="container">
        <h3>REGISTRAR USUARIO</h3>
        <form className='form' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <input type={'text'} {...register('nombre',{required:true})} placeholder='Nombre:' />
                  {errors.nombre && <p>El nombre es requerido.</p>}
                  <input type={'text'}  {...register('apellidos',{required:true})} placeholder='Apellidos:' />
                  {errors.apellidos && <p>Los apellido son requerido.</p>}
                  <input type={'text'} {...register('email',{required:true})} placeholder='Correo:' />
                  {errors.email && <p>El email es requerido.</p>}
                  <input type={'password'} {...register('newpassword',{required:true})} placeholder='Contraseña:' />
                  {errors.newpassword && <p>Ingrese la contraseña.</p>}
                  <input type={'password'} {...register('passcurrentpassword',{required:true})} placeholder='Confirmar Contraseña:' />
                  {errors.passcurrentpassword && <p>Confirmarcion de la contraseña es requerido.</p>}
              </div>
              <div>
                  <select {...register('category', { required: true })} >
                      <option value="">Seleccionar Rol...</option>
                      <option value="A">Dentista</option>
                      <option value="B">Asistente</option>
                  </select>
                  {errors.category && <p>Eliga un Rol.</p>}
              </div>
              <div>
                  <input  type='submit' value='Registrarse' />
                  <input  type='submit' value='Borrar registros'  />
              </div>
        </form>
      </div>  
    </div>
  )
}

export default Registrar