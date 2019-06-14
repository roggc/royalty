__dev__&&console.log('src/comps/pages/login/hoc')

import hoc from 'src/hocs/hoc'
import login from 'src/graphql/queries/login'
import {useRef} from 'react'
export default
hoc
(
  (
    ()=>
    (
      {
      }
    )
  )
  ()
)
(
  ideas=>setIdeas=>
  {
    const refEmail=useRef()
    const refPsswrd=useRef()
    const btnQueryClick=()=>
    {
      setIdeas
      (
        {
          ...ideas,
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
        {
          console.log(resp)
          setIdeas
          (
            {
              ...ideas,
              fetching:false
            }
          )
        }

      )
    }
    const actions=
    {
      btnQueryClick,
      refEmail,
      refPsswrd
    }
    return actions
  }
)
