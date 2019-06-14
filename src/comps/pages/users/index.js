__dev__&& console.log('src/comps/pages/users/index')

import React from 'react'
import hoc from 'src/comps/pages/users/hoc'
import style from 'src/comps/pages/users/style'

export default
hoc
(
  ({children:{users},...rest})=>
  <div {...rest}>
    {
      users.res&& users.res.length>0&&
      <div>
        {
          users.res.map
          (
            user=>
            <div key={user.id} className={`${style.border}`}>
              <div className={`${style.row}`}>
                <div className={`${style.col}`}>
                  <span>name:</span>
                </div>
                <div className={`${style.col} ${style.col2}`}>
                  <span>{user.name}</span>
                </div>
              </div>
              <div className={`${style.row}`}>
                <div className={`${style.col}`}>
                  <span>email:</span>
                </div>
                <div className={`${style.col} ${style.col2}`}>
                  <span>{user.email}</span>
                </div>
              </div>
              <div className={`${style.row}`}>
                <div className={`${style.col}`}>
                  <span>id:</span>
                </div>
                <div className={`${style.col} ${style.col2}`}>
                  <span>{user.id}</span>
                </div>
              </div>
            </div>
          )
        }
      </div>
    }
    {
      users.error&&
      <div>
      error
      </div>
    }
  </div>
)
