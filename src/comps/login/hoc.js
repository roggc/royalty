import hoc from 'src/hocs/hoc'
import login from 'src/graphql/queries/login'
import {useRef} from 'react'

const getProps=(state,setState)=>
{
  const refEmail=useRef()
  const refPsswrd=useRef()
  const click=()=>
  login
  (
    {
      email:refEmail.current.value
      ,psswrd:refPsswrd.current.value
    }
  )
  (resp=>null)
  const props=
  {
    click,
    refEmail,
    refPsswrd
  }
  return props
}

const initialState=
{
}

export default hoc(initialState)(getProps)
