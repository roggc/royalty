import React,{useState} from 'react'

export default initialState=>getProps=>C=>({children,...rest})=>
{
  const [state,setState]=useState(initialState)
  return <C {...rest} {...getProps(state,setState)}>{{...state,...children}}</C>
}
