import React from 'react'
import hoc from 'src/comps/center/hoc'
import style from 'src/comps/center/style'

export default
hoc
(
  ({children,content,...rest})=>
  <div {...rest}>
    <div className={`${style.row}`}>
      <div className={`${style.col}`}>
        <div className={`${style.container}`}>
          {content}
        </div>
      </div>
    </div>
  </div>
)
