import hoc from 'src/comps/fadeIn/hoc'
import React from 'react'
import style from 'src/comps/fadeIn/style'

const v1=
({children,content,...rest})=>
<div {...rest} className={`${style.fadein} ${style.container}`}>
  {
    content||
    <span>undefined</span>
  }
</div>

export const V1=hoc(v1)
