__dev__&& console.log('src/comps/footer/index')

import React from 'react'
import hoc from 'src/comps/footer/hoc'
import style from 'src/comps/footer/style'

export default
hoc
(
  ({children,content,...actions})=>
  <div className={`${style.background} ${style.others}`} {...actions}>
    {content}
  </div>
)
