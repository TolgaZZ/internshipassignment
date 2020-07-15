import React from 'react'
import { Link } from 'react-router-dom' 
import SigninLinks from './SignedinLinks'
import SignedoutLinks from './SignedoutLinks'

const Navbar = () =>{
    return (
        <nav className="nav-wrapper #304ffe indigo accent-4">
            <div className="container">
                <Link to="/" className="brand-logo">Todolist</Link>
                <SigninLinks/>
                <SignedoutLinks/>
            </div>
        </nav>
    )
}




export default Navbar 