__dev__&&console.log('src/comps/header/hoc')

import hoc from 'src/hocs/hoc'
import {useRef} from 'react'
import useClickOutside from 'src/hooks/useClickOutside'
export default
hoc
(
  (
    ()=>
    (
      {
        showMenu:false
      }
    )
  )
  ()
)
(
  state=>setState=>
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
)
