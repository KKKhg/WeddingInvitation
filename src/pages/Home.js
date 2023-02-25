import { Button } from "@mui/material";
import React, { useState } from 'react';
import Calendar from "../component/Calendar";
import Footer from "../component/Footer";
import Gallery from "../component/Gallery";
import MainImg from "../component/MainImg";
import BasicPortalModal from "../component/modal/BasicPortalModal";
import Timer from "../component/Timer";
import VideoPlayer from "../component/VideoPlayer";
import './Home.css';


const Home = () => {
    const [modal, setModal] = useState(false);
    const modalOpen = () => setModal(true);
    
    return (
        <div className="wrapper">
            {/* <VideoPlayer /> */}
            <MainImg />
            <Gallery />
            <>
                <Calendar />
                <Timer />
            </>
            <BasicPortalModal modalOpen={modal} closeCallback={() => setModal(false)}>children</BasicPortalModal>
            <Button onClick={modalOpen}>openn</Button>
            <Footer />
        </div> 
    );
}

export default Home;