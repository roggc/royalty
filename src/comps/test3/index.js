import React from 'react'
import hoc from 'src/comps/test3/hoc'
import style from 'src/comps/test3/style'

export default
hoc
(
  ({children,...rest})=>
  <div {...rest}>
    <div className={style.container}>

    </div>
    <div className={style.element}>
        heyn
      </div>
      <div className={style.element}>
          hoy
        </div>
  </div>
)
