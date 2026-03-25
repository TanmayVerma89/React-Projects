import "../styles/macwindow.scss"
import { Rnd } from 'react-rnd';

const MacWindows = ({children}) => {
    return (
        <Rnd>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title">
                        <img src="./macwindow-icons/mac-folder-Icon.png" alt="" />
                        <p>tanmayverma - zhx </p>
                    </div>
                </div>
                <div className="main-content">{children}</div>
            </div>
        </Rnd>
    )
}

export default MacWindows