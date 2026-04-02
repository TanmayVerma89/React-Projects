import React, { useContext } from 'react'
import '../styles/nav.scss'
import DateTime from './DateTime'
import { WindowStateContext } from '../context/StateContext';
const Nav = () => {
    const { windowState, setwindowState } = useContext(WindowStateContext);
    return (
        <nav>
            <div className="left">

                <div className="apple-icon">
                    <img src="./nav-icons/apple.svg" alt="" />
                </div>
                <div className="nav-items">
                    <p>Tanmay Verma</p>
                </div>
                <div className="nav-items">
                    <p>Files</p>
                </div>
                <div className="nav-items">
                    <p>Window</p>
                </div>
                <div
                    onClick={() => {
                        setwindowState((prev) => ({
                            ...prev,
                            cli: !prev.cli
                        }))
                    }}
                    className="nav-items">
                    <p>Terminal</p>
                </div>

            </div>
            <div className="right">

                <div className="nav-icon">
                    <img src="./nav-icons/wifi.svg" alt="" />
                </div>

                <div className="nav-items">
                    <DateTime />
                </div>

            </div>
        </nav>
    )
}

export default Nav