import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';
import ImageGallery from 'react-image-gallery';

const _images = [
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
    const [images, setImages] = useState(_images);
    const [cnt, setCnt] = useState(0);
      
    useEffect(() => {
        if(cnt < 1) setCnt(prev => ++prev);
        else if(cnt < 2) setImageSize();
    }, [cnt])

    function setImageSize() {
        const ratio = 1.5;
        const wrap_width = document.querySelector('#wrapper').clientWidth;
        
        const standard_width = wrap_width;
        const standard_height = wrap_width * ratio;
        
        setImages(prev => {
            const next = [...prev];
            next.forEach((el, idx) => {
                el.originalWidth = standard_width;
                el.originalHeight = standard_height;
            })    
            return next;
        })
    }
    
    return (
        <div className="gallery_wrapper">
            <div className="f-xl">갤러리</div>
            <ImageGallery items={images}
                    showBullets={true}
                    showFullscreenButton={false}
                    showPlayButton={false}
            />
        </div>
    )
};

export default Gallery;