__dev__&& console.log('src/comps/content/content')

import React from 'react'
import hoc from 'src/comps/content/hoc'
import style from 'src/comps/content/style'
import Login from 'src/comps/pages/login/login'
import Loading from 'src/comps/loading/loading'
import Center from 'src/comps/center/center'

export default
hoc
(
  ({children,action1,...actions})=>
  <div {...actions}>
    <div className={style.border}>
      <Center action1={action1}/>
    </div>
  </div>
)
