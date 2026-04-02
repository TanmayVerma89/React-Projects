import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import axios from 'axios';
import Markdown from 'react-markdown'
import "../styles/note.scss"
import MacWindows from './MacWindows'

const Note = ({windowName , setwindowState}) => {

  const [markdown, setmarkdown] = useState("")

  const getData = async() => {
    const res = await axios.get('./note.txt')
    setmarkdown(res.data)
  };
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <MacWindows
    windowName={windowName} setwindowState={setwindowState}>
      <div className="note-window">
        {markdown.length > 0 ? <SyntaxHighlighter language='typescript' style={dark}>{markdown}</SyntaxHighlighter>: <p>Loading....</p>}
      </div>
    </MacWindows>
  )
}

export default Note