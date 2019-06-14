__dev__&&console.log('src/comps/test5/index')

import React from 'react'
import hoc from 'src/comps/test5/hoc'
import style from 'src/comps/test5/style'

export default
hoc
(
  ({children,...rest})=>
  <div {...rest}>
  <div className={`${style.container1}`}>
    <div className={style.container2}>
      <div className={style.card}>
        hey
      </div>
      <div className={style.card}>
        how
      </div>
      <div className={style.card}>
        home
      </div>
      <div className={style.card}>
        alleluya
      </div>
      <div className={style.card}>
        final
      </div>
    </div>
    </div>
  </div>
)
