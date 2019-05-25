import hoc from 'comps/form1/hoc'
import React from 'react'
import style from 'comps/form1/style'

const v1=
({children,content,...rest})=>
<div {...rest} className={`${style.container}`}>
  <div>
    <div className={`${style.row} ${style.border}`}>
      <div className={`${style.col}`}>
        {content.label1}
      </div>
      <div className={`${style.col} ${style.col2}`}>
        <input className={`${style.input}`}/>
      </div>
    </div>
    <div className={`${style.row} ${style.border}`}>
      <div className={`${style.col}`}>
        {content.label2}
      </div>
      <div className={`${style.col} ${style.col2}`}>
        <input className={`${style.input}`}/>
      </div>
    </div>
  </div>
</div>

export const V1=hoc(v1)
