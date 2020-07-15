import React from 'react'
import { NavLink } from 'react-router-dom' 

const SignedinLinks = () =>{
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Task</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating #e3f2fd ">TZ</NavLink></li>
        </ul>
    )
}




export default SignedinLinks 