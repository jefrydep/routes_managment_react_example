import React from 'react'
import ReactDOM from 'react-dom/client'
 
import Heroes from './Heroes'
import StatePage from './pages/StatePage';
import {  } from "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heroes/>
    {/* <StatePage></StatePage> */}
  </React.StrictMode>
)
