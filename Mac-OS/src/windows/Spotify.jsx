import React from 'react'
import MacWindows from './MacWindows'
import "../styles/spotify.scss"

const Spotify = () => {
  return (
    <MacWindows height='50vh' width='min(20vw)' x='1221.5' y='37'>
        <div className="spotify-window" >
            <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/4EK85f7KIxfujIhqOZlQpw?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="2" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindows>
  )
}

export default Spotify