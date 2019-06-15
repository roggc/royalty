__dev__&& console.log('src/comps/header/header')

import hoc from 'src/comps/header/hoc'
import React from 'react'
import style from 'src/comps/header/style'
import Modal from 'src/comps/modal/modal'

export default
hoc
(
  ({children,children:{showMenu},content,menuClick,menuRef,modalClick,...rest})=>
  <div className={`${style.background} ${style.container}`} {...rest}>
    <div>
      {content.message}
    </div>
    <div className={`${style.menu}`} onClick={menuClick} ref={menuRef}>
      <div>
        <i className="fas fa-bars"></i>
      </div>
      <Modal content=
        {
          <div onClick={menuClick}>
            {content.menu}
          </div>
        }
      style={{right: '75px'}} onClick={modalClick}>{{...children,show:showMenu}}</Modal>
    </div>
  </div>
)
