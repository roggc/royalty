__dev__&&console.log('src/comps/test4/test4')

import React from 'react'
import hoc from 'src/comps/test4/hoc'
import style from 'src/comps/test4/style'

export default
hoc
(
  ({children,...rest})=>
  <div className={style.flexcenter}>
    <div className={style.card}>
      a
    </div>
    <div className={style.card}>
      b
    </div>
  </div>
)
