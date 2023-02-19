import React from 'react';
import Calendar from "../component/Calendar";
import Gallery from "../component/Gallery";
import MainImg from "../component/MainImg";
import Timer from "../component/Timer";
import VideoPlayer from "../component/VideoPlayer";
import './Home.css';

const Home = () => {
    return (
        <div className="wrapper">
            {/* <VideoPlayer /> */}
            <MainImg />
            <Gallery />
            <>
                <Calendar />
                <Timer />
            </>
            {/* <img src={require('../assets/images/zippo.jpeg')} width="100%" alt="zippo"/> */}
        </div> 
    );
}

export default Home;