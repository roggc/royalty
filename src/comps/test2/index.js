import hoc from 'src/comps/test2/hoc'
import React from 'react'
import style from 'src/comps/test2/style'

const v1=
({children,...rest})=>
<div {...rest}>
  <div className={style.flerx}>
    <div>block1</div>
    <div>block2</div>
  </div>
  <div className={style.parent}>
    <div className={style.child}>block11</div>
    <div className={style.child}>block22</div>
  </div>
</div>

export const V1=hoc(v1)
