import hoc from 'hocs/hoc'
import {useRef} from 'react'
import {useClickOutside} from 'hooks/useClickOutside'

const getProps=(state,setState)=>
{
  const menuRef = useRef(null)
  useClickOutside
  (
    (e) => menuClick(undefined,true),
    menuRef
  )
  const menuClick=(e,hide=false)=>
  {
    setState
    (
      {
        ...state,
        showMenu:!hide&&!state.showMenu
      }
    )
  }
  const modalClick=(e)=>e.stopPropagation()
  const props=
  {
    menuClick,
    menuRef,
    modalClick
  }
  return props
}

const initialState=
{
  showMenu:false
}

export default hoc(initialState)(getProps)
