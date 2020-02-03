import React from 'react';
import Swiper from 'react-id-swiper';
import './Gallery.css';

const Gallery = () => {

    const params = {
        effect: 'coverflow',
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
       autoplay: {
            delay: 2500,
            desableOnInteraction: true
        },
        coverflowEffect: {
            rotate: 0,
            modifier: 10,
            slideShadows: false
        },
        pagination:{
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

        spaceBetween: 50
    }

    return (
        <div className="gallery">
            <h3 className="title">Gallery</h3>
            <p>Ide egy kis szöveg a képekről</p>
            <Swiper {...params}>
                <div className="swiper-slide"><img alt="cherry blossom" src="./img/gallery-blossom/blossom1.jpg"/></div>
                <div className="swiper-slide"><img alt="cherry blossom" src="./img/gallery-blossom/blossom2.jpg"/></div>
                <div className="swiper-slide"><img alt="cherry blossom" src="./img/gallery-blossom/blossom3.jpg"/></div>
                <div className="swiper-slide"><img alt="cherry blossom" src="./img/gallery-blossom/blossom4.jpg"/></div>

            </Swiper>
        </div>
    );
}

export default Gallery