import React, { useContext } from 'react'
import '../styles/dock.scss';
import { WindowStateContext } from '../context/StateContext';

const Dock = () => {

  const { windowState, setwindowState } = useContext(WindowStateContext);

  const setTrue = (name) => {
    setwindowState((prev) => ({
      ...prev,
      [name]: true
    }))
  }
  
  const setFalse = (name) => {
    setwindowState((prev) => {
      return {
        ...prev,
        [name]: false
      }
    })
  }

  return (
    <footer className='dock'>
      <div
        onClick={() => {
          windowState.github ? setFalse("github") : setTrue("github");
        }}
        className="icon github"><img src="./dock-icons/github.svg" alt="icons" /></div>
      <div
        onClick={() => {
          window.open('https://calendar.google.com/calendar/u/0/r',"_blank")
        }}
        className="icon calendar"><img src="./dock-icons/calender.svg" alt="icons" /></div>
      <div
        onClick={() => {
          windowState.spotify ? setFalse("spotify") : setTrue("spotify");
        }}
        className="icon spotify"><img src="./dock-icons/spotify.svg" alt="icons" /></div>
      <div
        onClick={() => {
          windowState.pdf ? setFalse("pdf") : setTrue("pdf");
        }}
        className="icon pdf"><img src="./dock-icons/pdf.svg" alt="icons" /></div>
      <div
        onClick={() => {
          windowState.note ? setFalse("note") : setTrue("note");
        }}
        className="icon note"><img src="./dock-icons/note.svg" alt="icons" /></div>
      <div
        onClick={() => {
          window.open('mailto:tanmayverma1@amityonline.com',"_blank")
        }}
        className="icon mail"><img src="./dock-icons/mail.svg" alt="icons" /></div>
      <div
        onClick={() => {
          window.open('',"_blank")
        }}
        className="icon link"><img src="./dock-icons/link.svg" alt="icons" /></div>
      <div
        onClick={() => {
          windowState.cli ? setFalse("cli") : setTrue("cli");
        }}
        className="icon cli"><img src="./dock-icons/cli.svg" alt="icons" /></div>
    </footer>
  )
}

export default Dock