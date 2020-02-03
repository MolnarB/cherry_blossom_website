import React from 'react';
import './Article.css';

const Article = ({imgLink, title, author}) => {
    return (
        <div className="article">
            <div className="image"><img alt="cherry blossom" src={imgLink}/></div>
            <div className="content">
                <h4 className="title">{title}</h4>
                <p className="author">{author}</p>
            </div>
        </div>
    );
}

export default Article;