import React from 'react';
import $ from 'jquery';
import './Hero.css';

const Hero = () => {

    $(window).scroll(()=>{
        let scroll = $(window).scrollTop();
        $(".zoom img").css({
            width: (100 + scroll / 5) + "%"
        })
    })

    return (
        <div className="hero">
            <section className="zoom">
                <img alt="Hero background" src="https://img.wallpapersafari.com/desktop/1600/900/16/47/sC4cHY.jpg"/>
                <h1>Cherry Blossom (Sakura) Photo Portfolio</h1>
                <h3>Beautiful pictures for your viewing pleasure</h3>
            </section>
            
        </div>
    );
}

export default Hero;