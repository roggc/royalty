__dev&& console.log('src/server/server')

import express from 'express'
import {ssr,__dev} from '../../dist/ssr.js'
const app = express()
const port = process.env.PORT||4000
app.use(express.static('dist'))
app.use(ssr)
app.listen(port,()=>console.log(`listening on localhost:${port}`))
