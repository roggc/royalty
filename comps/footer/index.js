import hoc from 'comps/footer/hoc'
import React from 'react'
import style from 'comps/footer/style'

const v1=
({children,content,...rest})=>
<div className={`${style.background} ${style.others}`} {...rest}>
  {content}
</div>

export const V1=hoc(v1)
