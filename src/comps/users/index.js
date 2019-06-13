import hoc from 'src/comps/users/hoc'
import React from 'react'
import style from 'src/comps/users/style'

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
