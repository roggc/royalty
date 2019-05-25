import hoc from 'src/comps/app/hoc'
import React from 'react'
import style from 'src/comps/app/style'
import {V1 as Header} from 'src/comps/header/index'
import {V1 as Content} from 'src/comps/content/index'
import {V1 as Footer} from 'src/comps/footer/index'
import {V1 as FadeIn} from 'src/comps/fadeIn/index'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {V1 as Login} from 'src/comps/form1/index'
import {V1 as Center} from 'src/comps/center/index'

const v1=
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
              <Link to="/">home</Link>
            </div>
            <div>
              <Link to="/about">about</Link>
            </div>
          </div>
      }
    }
  />
  <Content content=
    {
      <div>
        <Center content=
        {
          <div>
            <Route path='/' exact render=
            {
              ()=><FadeIn content=
              {
                <Login content=
                {
                  {
                    label1:<span>name:</span>,
                    label2:<span>email:</span>,
                  }
                }
                />
              }
              />
            }
            />
            <Route path='/about' render=
            {
              ()=><FadeIn content=
              {
                <Login content=
                {
                  {
                    label1:<span>name:</span>,
                    label2:<span>email:</span>,
                  }
                }
                />
              }
              />
            }
            />
          </div>
        }
        style={{minHeight:'300px'}}/>
      </div>
    }
  />
  <Footer content=
    {
      <span>&copy; 2019 react development</span>
    }
  />
</div>

export const V1=hoc(v1)
