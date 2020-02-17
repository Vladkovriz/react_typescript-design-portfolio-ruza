import React from "react"
import { Link } from "react-router-dom";

const Header = (props: any) => {
    return (
        <header>
            <img src="" alt=""/>
            <ul>
                <li>
                <Link to="/home">Home</Link>

                </li>
                <li>
                <Link to="/about-me">About Me</Link>

                </li>
                <li>
                <Link to="/portfolio">Portfolio</Link>

                </li>
            </ul>
        </header>
    )
}

export default Header