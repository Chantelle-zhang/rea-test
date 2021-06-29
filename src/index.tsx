import React from 'react';
import './index.css';
import App from './App';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import store from "./store";


render(
    <App/>,

    document.getElementById('root')
)


