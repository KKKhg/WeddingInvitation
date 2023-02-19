import React from 'react';
import './Gallery.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const images = [
    {
        src: require('../assets/images/weddingPicture/1.jpg'),
    },
    {
        src: require('../assets/images/weddingPicture/2.jpg'),
    },
    {
        src: require('../assets/images/weddingPicture/3.jpg'),
    },
    {
        src: require('../assets/images/weddingPicture/4.jpg'),
    },
    {
        src: require('../assets/images/weddingPicture/5.jpg'),
    },
    {
        src: require('../assets/images/weddingPicture/6.jpg'),
    }
];

const Gallery = () => {
    return (
        <div className="gallery_wrapper">
            <Carousel
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                transitionTime={0}	
                autoPlay={false}
            >
                {
                    images.map((el, idx) => {
                        return (
                            <div className="slider_wrap">
                                <img className="slider_img" 
                                    src={el.src}
                                />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
};

export default Gallery;