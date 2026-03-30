import React from 'react';
import "../styles/pdf.scss";
import MacWindows from './MacWindows';

const Pdf = () => {
  return (
    <MacWindows>
      <div className="resume">
        <embed src="./resume.pdf" frameborder="0"></embed>
      </div>
    </MacWindows>
  )
}

export default Pdf