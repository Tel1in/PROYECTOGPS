import React  from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Button, Container,Paper } from '@mui/material';
import NavBar from "./NavBar";
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import GppGoodIcon from '@mui/icons-material/GppGood';

function Login() {

  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => {};

  return(
      <>
      <NavBar />
      <Log>
          <Container component={Paper} className='Container'>
              <div>
                  <h1>SIGN IN</h1>
                  <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                     
                      <div> 
                      <AlternateEmailSharpIcon sx={{ fontSize: 60 }} color='primary' />
                        <input  
                        autoFocus
                        type={'text'}
                        {...register("email",{required:true})}
                        color='primary'
                        />
                      </div>
                      <div> 
                      <GppGoodIcon  sx={{ fontSize: 60 }} color='primary' />
                        <input  
                        autoFocus
                        type={'password'}
                        {...register("contraseña",{required:true})}
                        color='primary'
                        />
                      </div>
                      <Button
                        fullWidth
                        variant='container'
                        color='secondary'
                        className='b'
                        type='submit'
                        onClick={onSubmit}>
                          Sign In
                      </Button>
                  </form>
              </div>
          </Container>
      </Log>
      </>
      
  )
}


export default Login;

const Log = styled.div`
    background-repeat : no-repeat;
    background-size: cover;
    background-position: center;
		height: 100vh;
    background: #8aece4;

    .Container{
       opacity: 0.8;
       height: 60%;
       margin-top : 0;
       width : 100%;
       height : 100%;
       
    }

    div{
      margin-top: 60px;
      display : flex;
      flex-direction: column;
      align-items: center;

        form{
          margin-top : 10px;
          width:100%;

          div{
            display : flex;
            flex-direction: row;
          }

          .b{
            margin-top: 10px
          }
          
        }
    }

`