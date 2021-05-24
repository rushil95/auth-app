import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import WebFont from 'webfontloader'

WebFont.load(
    {
        google : {
            families : ['Noto Sans', 'sans-serif']
        } 
    }
)

ReactDOM.render(<App />, document.getElementById('root'))
