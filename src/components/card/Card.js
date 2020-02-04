import React from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import './Card.css'

const Card = () => {
    return (
        <Flippy className="card" flipOnHover={true} flipOnClick={false} flipDirection="horizontal">
            <FrontSide className="card-front">
                <div className="frontImage">
                    <img alt="sakura" src="https://previews.123rf.com/images/sabelskaya/sabelskaya1908/sabelskaya190800323/128947778-spring-time-cherry-blossom-border-3d-frame-with-pink-sakura-flowers-interlacing-white-rectangle-bord.jpg"/>
                    <div className="centerTitle">Sakura</div>
                </div>
            </FrontSide>
            <BackSide className="card-back">
              
                    <h4>Symbolism In Japan</h4>
                    <div className="content">
                        <p>In Japan, cherry blossoms symbolize clouds due to their nature of blooming en masse, besides being an enduring metaphor for the 
                            ephemeral nature of life,[10] an aspect of Japanese cultural tradition that is often associated with Buddhist influence,[11] 
                            and which is embodied in the concept of mono no aware.[12] The association of the cherry blossom with mono no aware dates back 
                            to 18th-century scholar Motoori Norinaga.[12] The transience of the blossoms, the exquisite beauty and volatility, has often 
                            been associated with mortality[10] and graceful and readily acceptance of destiny and karma; for this reason, cherry blossoms 
                            are richly symbolic, and have been utilized often in Japanese art, manga, anime, and film, as well as at musical performances 
                            for ambient effect. There is at least one popular folk song, originally meant for the shakuhachi (bamboo flute), titled "Sakura"
                            , and several pop songs. The flower is also represented on all manner of consumer goods in Japan, including kimono, stationery, 
                            and dishware. </p>
                    </div>
                    <button>Read More...</button>
               
                </BackSide>
        </Flippy>
    );
}

export default Card;