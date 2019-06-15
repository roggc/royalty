__dev__&& console.log('src/comps/loading/loading')

import React from 'react'
import hoc from 'src/comps/loading/hoc'
import style from 'src/comps/loading/style'

export default
hoc
(
  ({children,...rest})=>
  <div {...rest}>
    <div className={style.square}>
      <i className="fas fa-circle-notch fa-spin"></i>
    </div>
  </div>
)
