import React from 'react';
import "../styles/pdf.scss";
import MacWindows from './MacWindows';

const Pdf = ({windowName , setwindowState}) => {
  return (
    <MacWindows
    windowName={windowName} setwindowState={setwindowState}>
      <div className="resume">
        <embed src="./resume.pdf" frameBorder="0"></embed>
      </div>
    </MacWindows>
  )
}

export default Pdf