import fs from 'fs'
import path from 'path'
import render from 'src/render/index'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'

export default (req,res)=>
{
  const context = {}
  const ssr=
  renderToString
  (
    <StaticRouter location={req.url} context={context}>
      {render}
    </StaticRouter>
  )
  fs.readFile
  (
    path.resolve('dist/foo.html'),'utf8',(err, data)=>
    {
      res.send
      (
        data.replace
        (
          '$ssr',
          ssr
        )
      )
    }
  )
}
