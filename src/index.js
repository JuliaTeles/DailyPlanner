import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/primeiro'
import Parametro from './components/parametro'

ReactDOM.render(
    <div>
      <Primeiro></Primeiro>
      <Parametro titulo="esse é o titulo" subtitulo="Esse é o sub"></Parametro>
    </div>,
    document.getElementById('root')
)