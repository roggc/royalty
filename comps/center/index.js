import hoc from 'comps/center/hoc'
import React from 'react'
import style from 'comps/center/style'

const v1=
({children,content,...rest})=>
<div {...rest} className={`${style.row}`}>
  <div className={`${style.col}`}>
    <div className={`${style.container}`}>
      {content}
    </div>
  </div>
</div>

export const V1=hoc(v1)
