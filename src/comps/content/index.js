import React from 'react'
import hoc from 'src/comps/content/hoc'
import style from 'src/comps/content/style'

export default
hoc
(
  ({children,content,...rest})=>
  <div className={`${style.border} ${style.overflow}`} {...rest}>
    {content}
  </div>
)
