import React from 'react';
import ReactPlayer from "react-player";
import './VideoPlayer.css';

const VideoPlayer = () => {
    return (
            <ReactPlayer 
                    url={`${process.env.PUBLIC_URL}/videos/weddingVideo.mp4`}
                    playing={true}
                    loop={true}
                    volume={0}
                    width='100%'
                    height='100%'
            />  
    )
};

export default VideoPlayer;
