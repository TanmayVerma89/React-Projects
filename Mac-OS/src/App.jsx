import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindows from './components/MacWindows'


const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <MacWindows>
        <h2>Hello</h2>
      </MacWindows>
    </main>
  )
}

export default App