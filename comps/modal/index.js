import hoc from 'comps/modal/hoc'
import React from 'react'
import style from 'comps/modal/style'

const v1=
({children,children:{show},content,...rest})=>
<div className={`${style.containerModal} ${style.fade} ${show&&style.in} ${show||style.out}`}>
  <div className={`${style.modal}`} {...rest}>
    {content}
  </div>
</div>

export const V1=hoc(v1)
