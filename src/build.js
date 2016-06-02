import React from 'react'
import ReactDOMServer from 'react-dom/server'
import fs from 'fs'
import path from 'path'

import Html from './views/Html'
import Home from './views/pages/Home'

const pages = [
  {
    component: Home,
    filename: 'index.html'
  }
]

pages.forEach(page => {
  const html = '<!doctype html>' + ReactDOMServer.renderToString(<Html><page.component /></Html>)
  const filename = path.join(process.cwd(), 'dist', page.filename)

  console.log(`creating: ${filename}`)
  fs.writeFileSync(filename, html, 'utf8')
})
