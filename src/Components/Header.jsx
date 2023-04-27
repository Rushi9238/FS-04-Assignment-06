import React from 'react'
import {Link} from "react-router-dom"
import { logo } from '../Resources/image'
// import logo from "../Resources/logo.PNG"

function Header() {
  return (
    <nav>
        <div className="left">

            <div className="logo">
        <img src={logo} alt="" />
        <h1>Hootsuite</h1>
        </div>
        <div className="menu">
            <Link to={"/"}></Link>
            <Link>Platform</Link>
            <Link>Plans</Link>
            <Link>Enterprise</Link>
            <Link>Resources</Link>
            <Link>Education</Link>
        </div>
        </div>
        <div className="right">
            <Link>Contact Us</Link>
            <Link>Log in</Link>
            <button>Sign Up</button>
        </div>
    </nav>
  )
}

export default Header