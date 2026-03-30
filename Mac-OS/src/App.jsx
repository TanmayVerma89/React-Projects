import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './windows/Github'
import Note from './windows/Note'
import Pdf from './windows/Pdf'


const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
      <Pdf />
    </main>
  )
}

export default App