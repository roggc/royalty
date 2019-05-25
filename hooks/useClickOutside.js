import {useEffect} from 'react'

export const useClickOutside= (onOuterClick, innerRef)=>
  useEffect
  (
    () =>
    {
      const handleClick= (e)=> !innerRef.current.contains(e.target) && onOuterClick(e)
      innerRef.current&& document.addEventListener("click", handleClick)
      return () => document.removeEventListener("click", handleClick)
    },
    [onOuterClick, innerRef]
  )
