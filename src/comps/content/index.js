__dev__&& console.log('src/comps/content/index')

import React from 'react'
import hoc from 'src/comps/content/hoc'
import style from 'src/comps/content/style'
import Content from 'src/comps/content/index'
import Login from 'src/comps/pages/login/index'
import Loading from 'src/comps/loading/index'
import Center from 'src/comps/center/index'

export default
hoc
(
  ({children,content,...actions})=>
  <div {...actions}>
     <div className={`${style.border}`}>
     <div className={style.row}>
       <div className={style.translate}>
          {content}
        </div>
      </div>
      </div>
  </div>
)
