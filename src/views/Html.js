import React from 'react'

export default (props) => {
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <title>{props.title}</title>
      </head>
      <body>
        <div className='app'>{props.children}</div>
      </body>
    </html>
  )
}
