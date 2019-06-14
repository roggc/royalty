__dev__&&console.log('src/comps/test1/index')

import React from 'react'
import hoc from 'src/comps/test1/hoc'
import style from 'src/comps/test1/style'
import Modal from 'src/comps/modal/index'

export default
hoc
(
  ({children,...rest})=>
  <div {...rest}>
    <Modal content={'hsdfhshhhs'}></Modal>
  </div>
)
