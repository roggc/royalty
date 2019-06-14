__dev__&& console.log('src/comps/center/index')

import React from 'react'
import hoc from 'src/comps/center/hoc'
import style from 'src/comps/center/style'

export default
hoc
(
  ({children,content,...actions})=>
  <div {...actions}>
    <div className={`${style.row}`}>
      <div className={`${style.col}`}>
        <div className={`${style.container}`}>
          {content}
        </div>
      </div>
    </div>
  </div>
)
