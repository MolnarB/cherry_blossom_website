import React from 'react';
import LinkIcon from '../linkIcon/LinkIcon';
import './Footer.css';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="icons">
                <ul>
                    <li><LinkIcon link="a" icon="./img/icons/instagram.svg"/></li>
                    <li><LinkIcon link="a" icon="./img/icons/instagram.svg"/></li>
                    <li><LinkIcon link="a" icon="./img/icons/facebook.svg"/></li>
                    <li><LinkIcon link="a" icon="./img/icons/pinterest.svg"/></li>
                </ul>
            </div>
            <div className="footerText">
                <p>&copy; { year} This website made for practising and reference project. I hope you liked it.</p>
            </div>
        </div>
    );
}

export default Footer;
