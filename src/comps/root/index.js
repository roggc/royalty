__dev__&& console.log('src/comps/root/index')

import React from 'react'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import hoc from 'src/comps/root/hoc'
import style from 'src/comps/root/style'
import Header from 'src/comps/header/index'
import Content from 'src/comps/content/index'
import Footer from 'src/comps/footer/index'
import FadeIn from 'src/comps/fadeIn/index'
import Login from 'src/comps/pages/login/index'
import Center from 'src/comps/center/index'
import Users from 'src/comps/pages/users/index'

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
    <Content content=
    {
      <Login></Login>
    }>
    </Content>
    <Footer content=
      {
        <span>&copy; 2019 react development</span>
      }
    />
  </div>
)
