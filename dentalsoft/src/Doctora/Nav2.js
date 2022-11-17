import React, {useState} from 'react'
import BButton from './BButton'
import "./nav.css"
import styled from "styled-components"


function Nav2() {
  const [clicked , setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <Navar>
            <h2 className="navar_h2">DentalSoft</h2> 
            <div className={`links ${clicked ? 'active' : ''}`}>
              <a  href="/">Cerrar Sesion</a>
              <a  href="/Registrar">Registrarse</a>
              <a  href='/dashboard/UserD'>Perfil</a>
              <a  href='/dashboard/CitasD'>Citas</a>
            </div>
            <div className="burgger" >
              <BButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </Navar>
    </>
  )
}

export default Nav2


const Navar = styled.nav`
  h2{
    font-weight: bold;
    color: antiquewhite;
  }
  padding: .3rem;
  background-color: rgb(83, 187, 187);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }


  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width:768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color : white;
        display : inline;
      }
      display : block;
    }
  }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }



  .burgger{
    @media(min-width:768px) {
      display: none;
    }
   
} 
`;

const BgDiv = styled.div`
    position: absolute;
    background-color: #222;
    top: -1000px;
    left: -1000px;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active{
      border-radius: 0 0 80% 0;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
`;