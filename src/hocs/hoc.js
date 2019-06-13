import React,{useState} from 'react'
export default
state=>props=>C=>({children,...rest})=>
{
  const [state,setState]=useState({...state})
  return <C {...props(state)(setState)} {...rest} >{{...state,...children}}</C>
}
