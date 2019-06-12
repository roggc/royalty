import hoc from 'src/comps/modal/hoc'
import React from 'react'
import style from 'src/comps/modal/style'
export default
hoc
(
  ({children,children:{show},content,...rest})=>
  <div className={`${style.containerModal} ${style.fade} ${show&&style.in} ${show||style.out}`}>
    <div className={`${style.modal}`} {...rest}>
      {content}
    </div>
  </div>
)
