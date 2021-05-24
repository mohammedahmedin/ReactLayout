import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">

        <h1>The Elite Club </h1>
        <a href="/">Home</a>
        <a href="/Create" style={{
            color: "purple",
            backgroundColor:'#f1356d',
            borderRadius:'15px'
        }}>New Blog</a>
        
        </nav>
    )
}

export default Navbar
