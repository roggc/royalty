import hoc from 'src/comps/base/hoc'
import React from 'react'
import style from 'src/comps/base/style'

const v1=
({children,...rest})=>
<div {...rest}>
</div>

export const V1=hoc(v1)
