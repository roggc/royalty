__dev__&& console.log('src/comps/pages/login/index')

import React from 'react'
import hoc from 'src/comps/pages/login/hoc'
import style from 'src/comps/pages/login/style'
import Center from 'src/comps/center/index'
import Modal from 'src/comps/modal/index'
import Loading from 'src/comps/loading/index'

export default
hoc
(
  ({children:{fetching},content,refEmail,refPsswrd,btnQueryClick,btnRef,...rest})=>
  <div>
    <div className={style.border}>
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
   {fetching&&<Modal action1={<Loading></Loading>}></Modal>}
 </div>
)
