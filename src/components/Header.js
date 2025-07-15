import React from 'react';

function Header() {
    return (
        <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
            <h1>My React App</h1>
            <nav>
                <a href="#home" style={{ color: 'white', marginRight: '15px' }}>Home</a>
                <a href="#about" style={{ color: 'white', marginRight: '15px' }}>About</a>
                <a href="#contact" style={{ color: 'white' }}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;
