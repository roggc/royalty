__dev__&& console.log('src/comps/base/base')

import React from 'react'
import hoc from 'src/comps/base/hoc'
import style from 'src/comps/base/style'

export default
hoc
(
  ({children,...actions})=>
  <div {...actions}>
  </div>
)
