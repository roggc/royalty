__dev__&&console.log('src/comps/pages/users/hoc')

import hoc from 'src/hocs/hoc'
import users from 'src/graphql/queries/users'
import {useEffect} from 'react'
export default
hoc
(
  (
    ()=>
    (
      {
        users:{}
      }
    )
  )
  ()
)
(
  (state,setState)=>
  {
    useEffect
    (
      ()=>
      {
        let isSubscribed=true
        users
        ({})
        (
          resp=>
          isSubscribed&&
          setState
          (
            {
              ...state,
              users:resp.users
            }
          )
        )
        return ()=>isSubscribed=false
      },
      []
    )

    const props=
    {
    }
    return props
  }
)
