import React from 'react';
import logo from './earth.png'
export default function Navbar() {
    return(
        <section className='nav'>
        <div className='logo'><img src={logo} alt='er' className="earth--logo"></img></div>
        <h1>My Traval Journal</h1>
        </section>
    )
}