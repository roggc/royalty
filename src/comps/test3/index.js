import hoc from 'src/comps/test3/hoc'
import React from 'react'
import style from 'src/comps/test3/style'

const v1=
({children,...rest})=>
<div {...rest}>
  <div className={style.container}>
    <div className={style.centeredElement}>
      heyn
    </div>
    <div className={style.centeredElement}>
      hoynn
    </div>
  </div>
</div>

export const V1=hoc(v1)
