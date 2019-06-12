import hoc from 'src/hocs/hoc'
import login from 'src/graphql/queries/login'
import {useRef} from 'react'
const setProps=state=>setState=>
{
  const refEmail=useRef()
  const refPsswrd=useRef()
  const click=()=>
  {
    setState
    (
      {
        ...state,
        fetching:true
      }
    )
    login
    (
      {
        email:refEmail.current.value
        ,psswrd:refPsswrd.current.value
      }
    )
    (
      resp=>
      setState
      (
        {
          ...state,
          fetching:false
        }
      )
    )
  }
  const props=
  {
    click,
    refEmail,
    refPsswrd
  }
  return props
}
const iState=
(
  ()=>
  (
    {
    }
  )
)
()
export default hoc(iState)(setProps)
