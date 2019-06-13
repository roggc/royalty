import React from 'react'
import hoc from 'src/comps/content/hoc'
import style from 'src/comps/content/style'
import Content from 'src/comps/content/index'
import Login from 'src/comps/login/index'

export default
hoc
(
  ({children,content,...rest})=>
  <div className={`${style.border}`} {...rest}>
    <div className={`${style.posRel}`}>
      <div className={style.abs}>
        <Login></Login>
      </div>
      <div className={style.abs}>
        <LoadingSpin></LoadingSpin>
      </div>
    </div>
  </div>
)
