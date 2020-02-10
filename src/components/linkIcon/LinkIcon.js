import React from 'react';
import './LinkIcon.css';

const LinkIcon = ({link, icon}) => {
    return (
        
        <a className="icon" href={link}><img alt="icon" fill="white" src={icon}/></a>
    );
}

export default LinkIcon;