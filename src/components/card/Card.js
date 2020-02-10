import React from 'react';
import './Card.css'

const Card = () => {
    return (

        <div className="flip-card">
            <div className="flip-card-inner">
        
                <div className="flip-card-front">
                    <img alt="sakura" src="https://previews.123rf.com/images/sabelskaya/sabelskaya1908/sabelskaya190800323/128947778-spring-time-cherry-blossom-border-3d-frame-with-pink-sakura-flowers-interlacing-white-rectangle-bord.jpg"/>
                    <div className="centerTitle">Sakura</div>
                </div>

                <div className="flip-card-back">
                    <h4>Symbolism In Japan</h4>
                    <div className="content">
                        <p>In Japan, cherry blossoms symbolize clouds due to their nature of blooming en masse, besides being an enduring metaphor for the 
                            ephemeral nature of life, an aspect of Japanese cultural tradition that is often associated with Buddhist influence, 
                            and which is embodied in the concept of mono no aware... </p>
                    </div>
                    <div className="button">
                        <button><span>Read more&nbsp;</span></button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Card;