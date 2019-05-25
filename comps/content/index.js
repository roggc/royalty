import hoc from 'comps/content/hoc'
import React from 'react'
import style from 'comps/content/style'

const v1=
({children,content,...rest})=>
<div className={style.border} {...rest}>
  {content}
</div>

export const V1=hoc(v1)
