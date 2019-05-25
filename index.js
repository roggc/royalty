import {hydrate} from 'react-dom'
import React from 'react'

import 'favicon/android-chrome-192x192'
import 'favicon/android-chrome-512x512'
import 'favicon/apple-touch-icon'
import 'favicon/favicon-16x16'
import 'favicon/favicon-32x32'
import 'favicon/favicon'
import 'favicon/site'

import jsx from 'jsx'
import {BrowserRouter} from 'react-router-dom'

hydrate
(
  <BrowserRouter>
    {jsx}
  </BrowserRouter>,
  document.getElementById('root')
)
