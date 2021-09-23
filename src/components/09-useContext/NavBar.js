import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className ="navbar-brand text-white" to ="/">Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact = {true} activeClassName = "active" className="nav-link text-white" to="/">Home</NavLink>
                        <NavLink exact = {true} activeClassName = "active" className="nav-link text-white" to ="/about">About</NavLink>
                        <NavLink exact = {true} activeClassName = "active" className="nav-link text-white" to ="/login">LogIn</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
