import React, { useEffect, useState } from 'react'
import { Button, LinearProgress, Checkbox } from "@mui/material";
import styled from 'styled-components';



function Expediente() {
    const [editInput, setEditInput] = useState(false);
    const enableEditField = `${
        editInput ? "profile-input" : "profile-input-disable"
      }`;
    const enableEditInput = () => {
    setEditInput(true);
    };

    const disableEditInput = () => {
    setEditInput(false);
    };

  return (
    <Historia>
        <main>
            <section>
                <h2>EXPEDIENTE MEDICO</h2>
                    <LinearProgress />
                    <>
                        <div className="health-content">
                            <div className="checkbox-area">
                                <div>
                                    <span>Caries</span>
                                    <Checkbox
                                        color="secondary"
                                        className="check"
                                        name="Caries"
                                  
                                     />
                                </div>
                                <div>
                                    <span>Extracciones</span>
                                    <Checkbox
                                        color="secondary"
                                        className="check"
                                        name="Ext"
                                      
                                     />
                                </div>
                                <div>
                                    <span>Empastes dentales </span>
                                    <Checkbox
                                        color="secondary"
                                        className="check"
                                        name="Empastes"
                                      
                                     />
                                </div>
                                <div>
                                    <span>Coronas </span>
                                    <Checkbox
                                        color="secondary"
                                        className="check"
                                        name="Coronas"
                                 
                                     />
                                </div>
                                <div>
                                    <span>Limpiezas dentales o tartrectomías </span>
                                    <Checkbox
                                        color="secondary"
                                        className="check"
                                        name="dentalL"
                                        
                                     />
                                </div>
                            </div>

                    <div>
                        <span>Nombres</span>
                        <input
                            type="text"
                            name="fullname"
                            className={enableEditField}
                            placeholder="Nombre y apellido"

                        />
                    </div>
                    <div>
                        <span>Edad</span>
                        <input
                            type="number"
                            name="age"
                            className={enableEditField}
                        />
                    </div>
                    <div>
                        <span>Sexo</span>
                        <input
                            type="text"
                            name="sex"
                            className={enableEditField}

                        />
                    </div>
                    <div>
                        <span>Raza</span>
                        <input
                            type="text"
                            name="race"
                            className={enableEditField}

                        />
                     </div>
                     <div>
                        <span>Telefono</span>
                        <input
                            type="number"
                            name="tel"
                            className={enableEditField}

                        />
                     </div>
                    <div>
                        <span>Altura</span>
                        <input
                            type="number"
                            name="height"
                            placeholder="Metros"
                            className={enableEditField}
                        />
                    </div>
                    <div>
                        <span>Peso</span>
                        <input
                            type="number"
                            placeholder="Kilogramos"
                            name="weight"
                            className={enableEditField}
                        />
                    </div>
                    <div className='profile-textarea'>
                    <span>Comentario adiccionales</span>
                        <input
                            type="text"
                            placeholder="Agrega"
                            name="weight"
                            className={enableEditField}
                        />
                    </div>
                    </div>     

                    <div className="btn-container">
                        <Button
                        className="btn primary-btn"
                        onClick={editInput ? false : enableEditInput}
                        >
                        {editInput ? "Salvar" : "Editar"}
                        </Button>
                        <Button
                        className="btn cancel-btn"
                        onClick={disableEditInput}
                        disabled={editInput && false}
                        >
                        {editInput ? "Cancelar" : ""}
                        </Button>
                    </div> 
            </>
        
            </section>
        </main>
    </Historia>
  );
}

export default Expediente

const Historia= styled.div`
    height: auto !important;
    user-select: none;

    h2 {
    margin-bottom: 20px;
    }

    .health-content {
    display: flex;
    width: 1000px;
    height: auto;
    flex-wrap: wrap;
    gap: 20px;

        div {
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 80px;
        position: relative;
        margin: 0 0 15px 0;

            .edit-icon {
                position: absolute;
                bottom: 0;
                right: 0;
                cursor: pointer;
            }
        }

            .health-textarea {
            width: 100%;
            height: auto;
            display: flex;
            }

            .checkbox-area {
            width: 90%;
            height: auto;
            display: flex;
            flex-direction: row;
            text-align: center;

                .check {
                    width: 30px;
                    margin: auto;
                    color: #6c5ce7;
                }
            }

            .profile-textarea {
                width: 90%;
                padding: 16px;
                border-radius: 8px;
                background-color: #fefefe;
                box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
                resize: vertical;
                min-height: 130px;
                }

                img {
                width: 500px;
                margin: auto;
                
                }
        }
    .btn-container {
    display: flex;
    justify-content: center;
    gap: 10px;

    button {
      border-radius: 10px;
    }
  }
`