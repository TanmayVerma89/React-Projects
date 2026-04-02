import "../styles/macwindow.scss"
import { Rnd } from 'react-rnd';

const MacWindows = ({ children, height = "60vh", width = "25vw", minWidth = '20vw', minHeight = '60vh', x = "300", y = '100', windowName, setwindowState }) => {
    return (
        <Rnd
            default={{
                width: width,
                height: height,
                x: x,
                y: y
            }}
            minWidth={minWidth}
            minHeight={minHeight}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div
                            onClick={() => 
                                setwindowState((state) => ({ ...state, [windowName]: false }))
                            }
                            className="dot red"></div>
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