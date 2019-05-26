import hoc from 'src/hocs/hoc'
import getUsers from 'src/graphql/queries/users'
import {useEffect} from 'react'

const getProps=(state,setState)=>
{
  useEffect
  (
    ()=>
    {
      let isSubscribed=true
      getUsers
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

const initialState=
{
  users:{}
}

export default hoc(initialState)(getProps)
