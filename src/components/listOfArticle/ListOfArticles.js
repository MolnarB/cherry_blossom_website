import React from 'react';
import './ListOfArticles.css';
import Article from '../article/Article';

const ListOfArticles = () => {
    return (
        <div className="articles">
            <h3 className="title"> Articles</h3>
            <div className="list">
                <Article imgLink="./img/gallery-blossom/blossom1.jpg" title="Cherry blossom bloom unexpectedly in Japan" author="BBC NEWS"/>
                <Article imgLink="./img/gallery-blossom/blossom2.jpg" title="The Big Business of Japan's Cherry Blossoms" author="Bloomberg"/>
                <Article imgLink="./img/gallery-blossom/blossom3.jpg" title="The Cherry Blossom Tree" author="Sukiya Living Magazine"/>
                <Article imgLink="./img/gallery-blossom/blossom4.jpg" title="Japan in Bloom" author="The New York Times Style Magazine"/>
            </div>
        </div>
    );
}

export default ListOfArticles;