import hoc from 'comps/header/hoc'
import React from 'react'
import style from 'comps/header/style'
import {V1 as Modal} from 'comps/modal/index'

const v1=
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

export const V1=hoc(v1)
