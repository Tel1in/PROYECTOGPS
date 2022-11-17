import { Button, Tooltip } from '@mui/material'
import React , {useState} from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import  profileImg from '../assets/images/profileData.svg'
import Nav2 from './Nav2'
import BarraL from './BarraL'


function UserD() {

    const { register, handleSubmit,  } = useForm();
    const onSubmit = (data) => {};
    const [editInput, setEditInput] = useState(false);
    
    function enableInput(target) {
    setEditInput(true);
    } 

    function cancelEditData() {
        setEditInput(false);
      }
    return (
    <Content>
        <Nav2 />
        <main>
           <BarraL /> 
            <section>
                 <h2>INFORMACION DENTISTA</h2>
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="welcome-content" >
                        <div>
                            <span>ID</span>
                            <Tooltip title="El id no se puede ser editado">
                                <input 
                                    type={'text'}
                                    name={'id'}
                                    className="profile-input-disable"
                                    readOnly
                                    value={'17401085'}
                                />
                            </Tooltip>
                        </div>
                        <div>
                            <span>NOMBRE</span>
                            <input 
                            type={'text'}
                            {...register("nombre",{required:true})}
                            className={`${
                            editInput ? "profile-input" : "profile-input-disable"
                            }`}
                            readOnly={!editInput ? true : false}
                            />
                        </div> 
                        <div>
                            <span>EMAIL</span>
                            <input 
                            type={'text'}
                            {...register("email",{required:true})}
                            className={`${
                                editInput ? "profile-input" : "profile-input-disable"
                            }`}
                            readOnly={!editInput ? true : false}
                            /> 
                        </div>                
                 </div>
                 <div className="button-container">
                       <Button onClick={editInput ? false : enableInput}>
                       {editInput ? "Guardar" : "Editar informacion"}
                        </Button>     
                        <Button onClick={cancelEditData} className={editInput ? "btn secondary-btn" : "hide-element"}>
                            Cancelar
                        </Button>     
                 </div>
                 </form>        
            </section> 
            <img src={profileImg} alt="profile" className="page-forniture" />        
        </main>
    </Content>
            
  )
}

export default UserD


const Content= styled.div`
  height: 100vh;
  user-select: none;
  overflow: hidden;

  main {
    display: flex;

    > img {
      padding: 50px;
      width: 600px;
      position: absolute;
      right: 0;
    }

        section {
        flex: 20;
        padding: 30px;
        animation: fade 0.2s linear;
        display: flex;
        flex-direction: column;

        h2 {
        font-weight: 500;

            span {
                color: #ff6584;
            }
    
        }

            
        .button-container {
        display: flex;
        width: auto;
        flex-direction: column;

        button {
            width: 300px;
            margin: 10px;
            border-radius: 10px;
        }
        }

        .welcome-content {
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 20px;

        div {
            display: flex;
            flex-direction: column;
            width: 290px;
            height: 63px;
            margin-bottom: 10px;
            position: relative;

            .edit-icon {
            position: absolute;
            bottom: 0;
            right: 0;
            cursor: pointer;
            }
          }

            .profile-input-disable {
                caret-color: transparent;
                outline: none;
                user-select: none;
                color: #555555;
            }

                    .profile-input,
            .profile-input-disable {
                margin: 10px 0;
                border-radius: 10px;
                width: 300px;
                border: 1px #c6c6c6 solid;
                padding: 10px 15px;
            }

            img {
                width: 500px;
                margin: auto;
            }
        }   
        
     }
  }

  `