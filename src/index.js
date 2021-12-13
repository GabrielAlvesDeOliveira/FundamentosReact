import ReactDom from "react-dom";
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/primeiro'

ReactDom.render(
    <div>
        <Primeiro/>
    </div>,
    document.getElementById('root')
    )