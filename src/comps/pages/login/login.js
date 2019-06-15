__dev__&& console.log('src/comps/pages/login/login')

import React from 'react'
import hoc from 'src/comps/pages/login/hoc'
import style from 'src/comps/pages/login/style'
import Center from 'src/comps/center/center'
import Modal from 'src/comps/modal/modal'
import Loading from 'src/comps/loading/loading'

export default
hoc
(
  ({children:{fetching},content,refEmail,refPsswrd,btnQueryClick,btnRef,...actions})=>

    <div className={style.border}>
  <div className={style.row}>
    <div className={style.col}>
        <div>
          <div className={style.flex}>
            <div>email:</div><div className={style.flexinput}><input ref={refEmail}/></div>
          </div>
         <div className={style.flex}>
          <div>password:</div><div className={style.flexinput}><input type='password' ref={refPsswrd}/></div>
         </div>
         <div className={style.flex}>
           <button onClick={btnQueryClick}>enter</button>
         </div>
       </div>
     </div>
    </div>
  </div>

)
