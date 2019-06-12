import hoc from 'src/comps/login/hoc'
import React from 'react'
import style from 'src/comps/login/style'
import {V1 as Center} from 'src/comps/center/index'
import {V1 as Modal} from 'src/comps/modal/index'

const v1=
({children:{fetching},content,refEmail,refPsswrd,click,...rest})=>

//   <div {...rest} className={`${style.row}`}>
//   <div className={`${style.col}`}>
//   </div>
// </div>

<div className={style.container}>
  <Center content={'hello'} className={style.foo}/>
  <Center content=
  {
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
  }
  className={style.foo}/>
</div>

export const V1=hoc(v1)
