import React from 'react';
import './LinkIcon.css';

const LinkIcon = ({link, icon}) => {
    return (
        <a href={link} ><img alt="This is link icon" src={icon} /></a>
    );
}

export default LinkIcon;