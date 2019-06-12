import hoc from 'src/comps/test4/hoc'
import React from 'react'
import style from 'src/comps/test4/style'

const v1=
({children,...rest})=>
<div className={style.flexcenter}>
  <div className={style.card}>
    a
  </div>
  <div className={style.card}>
    b
  </div>
</div>

export const V1=hoc(v1)
