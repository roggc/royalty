__dev__&& console.log('src/comps/fadein/fadein')

import React from 'react'
import hoc from 'src/comps/fadeIn/hoc'
import style from 'src/comps/fadeIn/style'

export default
hoc
(
  ({children,content,...actions})=>
  <div {...actions} className={`${style.fadein} ${style.container}`}>
    {
      content||
      <span>undefined</span>
    }
  </div>
)
