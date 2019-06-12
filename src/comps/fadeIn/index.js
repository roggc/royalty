import React from 'react'
import hoc from 'src/comps/fadeIn/hoc'
import style from 'src/comps/fadeIn/style'

export default
hoc
(
  ({children,content,...rest})=>
  <div {...rest} className={`${style.fadein} ${style.container}`}>
    {
      content||
      <span>undefined</span>
    }
  </div>
)
