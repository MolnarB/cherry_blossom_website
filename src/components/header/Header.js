import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2><a href="#" target="_blank"><img src="https://pngimage.net/wp-content/uploads/2018/06/sakura-logo-png-2.png"/></a></h2>
            <nav>
                <ul>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#history">History</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#footer">Links</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default Header;