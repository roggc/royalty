__dev__&& console.log('src/comps/root/root')

import React from 'react'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import hoc from 'src/comps/root/hoc'
import style from 'src/comps/root/style'
import Header from 'src/comps/header/header'
import Content from 'src/comps/content/content'
import Footer from 'src/comps/footer/footer'
import FadeIn from 'src/comps/fadeIn/fadeIn'
import Login from 'src/comps/pages/login/login'
import Center from 'src/comps/center/center'
import Users from 'src/comps/pages/users/users'

export default
hoc
(
  ({children,...rest})=>
  <div className={`${style.generics}`} {...rest}>
    <Header content=
      {
        {
          message:
            <span>Wellcome</span>,
          menu:
            <div>
              <div>
                <Link to="/">login</Link>
              </div>
              <div>
                <Link to="/users">users</Link>
              </div>
            </div>
        }
      }
    />
    <Content action1=
    {
      <Login></Login>
    }/>
    <Footer content=
      {
        <span>&copy; 2019 react development</span>
      }
    />
  </div>
)
