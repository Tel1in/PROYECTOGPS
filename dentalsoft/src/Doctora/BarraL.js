import React from 'react';
import { useSelector } from 'react-redux';
import BarraLateral from './BarraLateral';
import styled from 'styled-components';

function BarraL() {
  const userData = useSelector(state => state.appEvents.userData);
  const options = ['Perfil', 'Historia', 'Consulta'];
  return (
    <Aside>
    <span>Menu</span>
    <div className='user-config'>
      { options.map(option => 
        <BarraLateral 
          name={option}
          key={option}
          linkId={userData.id}
        />)}
    </div>
  </Aside>
  )
}

export default BarraL

const Aside = styled.aside`
display: flex;
  flex-direction: column;
  padding: 10px 20px;
  background-color: transparent;
  flex: 4;
  border-right: 1px solid #e4e4e4;

  > span {
    font-size: 16px;
    margin: 10px;
  }

  .user-config {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 10px;
    a {
      text-decoration: none;
      color: var(--color-primary-font);
    }

    .selected {
      color: white;
      background-color: var(--color-purple);
      transition: 0.2s;
      animation: blop linear 0.2s;

      a {
        color: white;
      }

      &:hover {
        color: white;
      }
    }

    span {
      border-radius: 10px;
      padding: 10px 20px;
      margin-top: 10px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;

      &:hover {
        color: var(--color-purple);
      }
    }
  }
`