import React from 'react';
import { ToastContainer } from "react-toastify";
import Account from "../component/account/Account";
import Address from "../component/adress/Address";
import Calendar from "../component/Calendar";
import Comment from "../component/comment/Comment";
import Footer from "../component/Footer";
import Gallery from "../component/Gallery";
import MainImg from "../component/MainImg";
import SubImg from "../component/SubImg";
import Timer from "../component/Timer";
import VideoPlayer from "../component/VideoPlayer";
import './Home.css';
import "react-toastify/dist/ReactToastify.css";



const Home = () => { 
    
    return (
        <div className="wrapper" id="wrapper">
            {/* <VideoPlayer /> */}
            <MainImg />
            <SubImg />
            <div>
                <Calendar />
                <Timer />
            </div>
            <Gallery />
            <Address />
            <Account />
            <Comment />
            <Footer />
            <ToastContainer 
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div> 
    );
}

export default Home;