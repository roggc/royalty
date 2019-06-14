__dev__&&console.log('src/comps/testmodal/index')

import React from 'react'
import hoc from 'src/comps/testmodal/hoc'
import style from 'src/comps/testmodal/style'
import Modal from 'src/comps/modal/index'

export default
hoc
(
  ({children,...rest})=>
  <div {...rest}>
    {content}
  </div>
)
