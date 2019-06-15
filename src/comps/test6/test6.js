__dev__&&console.log('src/comps/test6/test6')

import React from 'react'
import hoc from 'src/comps/test6/hoc'
import style from 'src/comps/test6/style'

export default
hoc
(
  ({children:{show},click,...rest})=>
  show&&
  <div {...rest}>
    <button onClick={click}>hide</button>
  </div>
)
