import hoc from 'comps/fadeIn/hoc'
import React from 'react'
import style from 'comps/fadeIn/style'

const v1=
({children,content,...rest})=>
<div {...rest} className={`${style.fadein} ${style.container}`}>
  {
    content||
    <span>undefined</span>
  }
</div>

export const V1=hoc(v1)
