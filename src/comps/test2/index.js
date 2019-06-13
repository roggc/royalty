import React from 'react'
import hoc from 'src/comps/test2/hoc'
import style from 'src/comps/test2/style'

export default
hoc
(
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
)
