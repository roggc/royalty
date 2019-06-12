import React from 'react'
import hoc from 'src/comps/footer/hoc'
import style from 'src/comps/footer/style'

export default
hoc
(
  ({children,content,...rest})=>
  <div className={`${style.background} ${style.others}`} {...rest}>
    {content}
  </div>
)
