__dev__&& console.log('src/comps/modal/modal')

import hoc from 'src/comps/modal/hoc'
import React from 'react'
import style from 'src/comps/modal/style'
export default
hoc
(
  ({children,children:{show},action1,...actions})=>
  <div className={`${style.containerModal} ${show&&style.fade} ${show||style.in} `}>
    <div className={`${style.modal}`} {...actions}>
      {action1}
    </div>
  </div>
)
