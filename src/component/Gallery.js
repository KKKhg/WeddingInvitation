import React, { useEffect } from 'react';
import './Gallery.css';
import ImageGallery from 'react-image-gallery';



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


const Gallery = () => {
    useEffect(() => {
        const ratio = 1.5;
    
        images.forEach((el, idx) => {
            el.originalWidth = Number(window.innerWidth * 0.9);
            el.originalHeight = el.originalWidth * ratio;
            el.loading = 'lazy';
        })
    }, [])
    
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