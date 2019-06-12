import React,{useState} from 'react'
export default
iState=>setProps=>C=>({children,...rest})=>
{
  const [state,setState]=useState({...iState})
  return <C {...setProps(state)(setState)} {...rest} >{{...state,...children}}</C>
}
