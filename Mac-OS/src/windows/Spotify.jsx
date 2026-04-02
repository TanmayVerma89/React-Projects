import React from 'react'
import MacWindows from './MacWindows'
import "../styles/spotify.scss"

const Spotify = ({windowName , setwindowState}) => {
  return (
    <MacWindows 
    windowName={windowName} setwindowState={setwindowState}
    height='50vh' width='min(20vw)' x='1221.5' y='37'>
        <div className="spotify-window" >
            <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/37i9dQZF1E8OIWtYJqiNpx?utm_source=generator&theme=0" width="100%" height="100%"  allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindows>
  )
}

export default Spotify