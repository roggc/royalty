import hoc from 'src/comps/login/hoc'
import React from 'react'
import style from 'src/comps/login/style'

const v1=
({children,content,refEmail,refPsswrd,click,...rest})=>
<div {...rest} className={`${style.container}`}>
  <div>
    <div className={`${style.row} ${style.border}`}>
      <div className={`${style.col}`}>
        {content.text1}
      </div>
      <div className={`${style.col} ${style.col2}`}>
        <input ref={refEmail}/>
      </div>
    </div>
    <div className={`${style.row} ${style.border}`}>
      <div className={`${style.col}`}>
        {content.text2}
      </div>
      <div className={`${style.col} ${style.col2}`}>
        <input type='password' ref={refPsswrd}/>
      </div>
    </div>
    <div className={`${style.row} ${style.rowLast} ${style.border} ${style.borderLast}`}>
      <div className={`${style.col}`}>
        <span></span>
      </div>
      <div className={`${style.col} ${style.col2}`}>
        <button onClick={click}>{content.btnText}</button>
      </div>
    </div>
  </div>
</div>

export const V1=hoc(v1)
