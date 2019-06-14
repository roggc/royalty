__dev__&& console.log('src/hocs/hoc')

import React,{useState} from 'react'
export default
moreIdeas=>actions=>C=>({children,...moreActions})=>
{
  const [ideas,setIdeas]=useState({...moreIdeas})
  return <C {...actions(ideas)(setIdeas)} {...moreActions} >{{...ideas,...children}}</C>
}
