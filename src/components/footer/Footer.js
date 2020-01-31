import React from 'react';
import LinkIcon from '../linkIcon/LinkIcon';
import './Footer.css';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="icons">
                <ul>
                    <li><LinkIcon link="a" icon="https://image.flaticon.com/icons/png/512/8/8782.png"/></li>
                    <li><LinkIcon link="a" icon="https://img.icons8.com/ios-glyphs/30/000000/pinterest.png"/></li>
                    <li><LinkIcon link="a" icon="https://img.icons8.com/material-sharp/24/000000/facebook-circled.png"/></li>
                    <li><LinkIcon link="a" icon="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/instagram_circle_black-512.png"/></li>
                </ul>
            </div>
            <div className="footerText">
                <p>&copy; { year} This website made for practising and reference project. I hope you liked it.</p>
            </div>
        </div>
    );
}



export default Footer;
