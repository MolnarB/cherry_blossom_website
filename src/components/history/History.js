import React from 'react';
import './History.css';
import Card from '../card/Card';

const History = () => {
    return (
        <div id="history">
            <h3 className="title">History</h3>
                <div className="content">
                    <p>The cherry blossoms, known in Japan as sakura, are well know around the world for their radiant, delicate. and transient beauty. 
                        However they are more than simply beautiful trees, as the sakura have powerful ties to Japan’s history, culture and identity. 
                        Originally used to divine the year’s harvest, Sakura came to embody Wabi-sabi philosophy and shinto ideals of impermanence, hope 
                        and renewal and are now one of Japan’s most iconic natural symbols.
                        Adding to their magic and mystique, the sakura are usually only in full bloom for around one week. Across the diverse landscape 
                        of Japan’s main islands, this magical moment can occur between March to early May. After the brief period of full bloom, the small, 
                        round shaped flowers start to flutter gracefully from their trees and the blossoms are said to be the most beautiful in this final 
                        stage as the white and pink petals gently float to the ground.
                        For many Japanese, the blooming of the cherry blossom trees symbolizes human life, transience and nobleness. The Japanese love to 
                        celebrate and cherish the cherry blossoms trees during the limited flowering period and many people hold ‘flower watching’ parties 
                        known as hanami. You simply cannot travel to Japan in spring without appreciating the beauty of the sakura and experiencing a hanami 
                        party for yourself!
                        Given the cultural significance of the sakura, there are countless events, festivals, and speciality tours that centred around the 
                        blooming of the cherry blossom.</p>
                </div>
                <div className="cards">
                    <Card/>
                    <Card/>
                </div>
        </div>
    );
}

export default History;