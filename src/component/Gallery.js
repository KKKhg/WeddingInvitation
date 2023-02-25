import React from 'react';
import './Gallery.css';
import ImageGallery from 'react-image-gallery';
import isMobile from "../utils/isMobile";





const Gallery = () => {
    let images = [
        {
            original: require('../assets/images/weddingPicture/1.jpg'),
        },
        {
            original: require('../assets/images/weddingPicture/2.jpg'),
        },
        {
            original: require('../assets/images/weddingPicture/3.jpg'),
        },
        {
            original: require('../assets/images/weddingPicture/4.jpg'),
        },
        {
            original: require('../assets/images/weddingPicture/5.jpg'),
        },
        {
            original: require('../assets/images/weddingPicture/6.jpg'),
        }
    ];
    
    const img = new Image();
    img.src = images[0].original;
    const ratio = isMobile() ? 1.45 : 0.5;
    
    const standard_width = window.innerWidth;
    const standard_height = standard_width * ratio;
    
    images.forEach((el, idx) => {
        el.originalWidth = standard_width;
        el.originalHeight = standard_height;
    })
    
    return (
        <div className="gallery_wrapper">
            <ImageGallery items={images}
                    showBullets={true}
                    show nav={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    
            />
        </div>
    )
};

export default Gallery;