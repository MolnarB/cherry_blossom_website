import React from 'react';
import './About.css';

const About = () => {
    return(
        <div className="about">
            <h3 className="title">About Me</h3>
            <div className="bio">
                <p>Fiatal mindenre elszánt programozó vagyok. Szeretek új dolgokat tanulni és kipróbálni magam különböző területeken. Fontosnak 
                tartom a folyamatos fejlődést. Kreatívitás és design miatt kedveltem meg a webfejlesztést. Ezt az oldalt is saját magam 
                fejlesztésére, illetve referenciaként készítettem el Reactban. Célom, hogy sikeres legyek a szakmámban és ezáltal biztosítani 
                tudjak a családomnak egy szép életel.</p>
            </div>
        </div>
    );
}

export default About;