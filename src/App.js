import './App.css';
import React from 'react'
import Portfolio from './Portfolio/Portfolio'

function App({data}) {
  return (
    <div>
      <Portfolio data={data} />
    </div>
  )
}


export default App;
