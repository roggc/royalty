__dev__&& console.log('src/comps/center/center')

import React from 'react'
import hoc from 'src/comps/center/hoc'
import style from 'src/comps/center/style'

export default
hoc
(
  ({children,action1,...actions})=>
  <div {...actions}>
    <div className={`${style.row}`}>
    <div className={`${style.col}`}>
          {action1}
      </div>
    </div>
  </div>
)
