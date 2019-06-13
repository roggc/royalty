import hoc from 'src/comps/login/hoc'
import React from 'react'
import style from 'src/comps/login/style'
import Center from 'src/comps/center/index'
import Modal from 'src/comps/modal/index'

export default
hoc
(
  ({children:{fetching},content,refEmail,refPsswrd,click,...rest})=>
  <div className={style.border}>
    <div>
      <div>email:</div><input/>
      <div>password:</div><input/>
    </div>
  </div>
)
