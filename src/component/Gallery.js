import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';
import ImageGallery from 'react-image-gallery';
import isMobile from "../utils/isMobile";

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
    },
    {
        original: require('../assets/images/weddingPicture/7.jpg'),
    },
    {
        original: require('../assets/images/weddingPicture/8.jpg'),
    },
    {
        original: require('../assets/images/weddingPicture/9.jpg'),
    },
    {
        original: require('../assets/images/weddingPicture/10.jpg'),
    },
    {
        original: require('../assets/images/weddingPicture/11.jpg'),
    },
];

const Gallery = () => {
    const [images, setImages] = useState(_images);
    const [index, setIndex] = useState(1);
    const [cnt, setCnt] = useState(0);
      
    useEffect(() => {
        if(cnt < 1) setCnt(prev => ++prev);
        else if(cnt < 2) setImageSize();
    }, [cnt])

    function setImageSize() {
        const ratio = 1.50;
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
    
    function _setIndex(index) {
        setIndex(index + 1);
    }
    
    return (
        <div className="gallery_wrapper">
            <div className="f-xl">갤러리</div>
            {/* <div className="subtitle">GALLERY</div> */}
            <ImageGallery items={images}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    onBeforeSlide={_setIndex}
            />
            <div className="f-s">{index} / {images.length}</div>
        </div>
    )
};

export default Gallery;