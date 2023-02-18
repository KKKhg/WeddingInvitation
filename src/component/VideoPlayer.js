import React from 'react';
import ReactPlayer from "react-player";
import './VideoPlayer.css';

const VideoPlayer = () => {
    return (
        <div className="video_wrapper">
            {/* <video className="video"  
                autoPlay={true}
                muted={true}
                controls={false}
                loop={true}
                playsInline={true}
            >
                <source src={`${process.env.PUBLIC_URL}/videos/weddingVideo.mp4`} type="video/mp4" />
            </video> */}
            
            <ReactPlayer 
                    url={`${process.env.PUBLIC_URL}/videos/weddingVideo.mp4`}
                    autoPlay={true}
                    playing={true}
                    playsinline={true}
                    loop={true}
                    muted={true}
                    width='100%'
                    height='100%'
            />  
        </div>    
    )
};

export default VideoPlayer;
