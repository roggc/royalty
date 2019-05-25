import hoc from 'comps/base/hoc'
import React from 'react'
import style from 'comps/base/style'

const v1=
({children,content,...rest})=>
<div {...rest}>
  {content}
</div>

export const V1=hoc(v1)
