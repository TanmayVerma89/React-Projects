import React, { useContext } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './windows/Github'
import Note from './windows/Note'
import Pdf from './windows/Pdf'
import Spotify from './windows/Spotify'
import CLI from './windows/CLI'
import { WindowStateContext } from './context/StateContext'


const App = () => {
  const { windowState, setwindowState } = useContext(WindowStateContext)

  return (
    <main>
      <Nav />
      <Dock />
      {windowState.github && <Github windowName='github' setwindowState={setwindowState} />}
      {windowState.note && <Note windowName='note' setwindowState={setwindowState} />}
      {windowState.pdf && <Pdf windowName='pdf' setwindowState={setwindowState} />}
      {windowState.spotify && <Spotify windowName='spotify' setwindowState={setwindowState} />}
      {windowState.cli && <CLI windowName='cli' setwindowState={setwindowState} />}
    </main>
  )
}

export default App