import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './windows/Github'
import Note from './windows/Note'
import Pdf from './windows/Pdf'
import Spotify from './windows/Spotify'
import CLI from './windows/CLI'


const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
      <Pdf />
      <Spotify />
      <CLI />
    </main>
  )
}

export default App