import React from 'react';
import './MainImg.css';

const MainImg = () => {
    return (
        <div className="main_img_wrap">
            <img className="main_img" 
                    src={require('../assets/images/main_img1.webp')}
                    width='100%'
            />
            <div className="subject_wrapper">
                <div className="subject_wrapper_box1">
                    <div className="subject_wrapper_box2">
                        <div className="subject_date">2023. 06. 24. 토요일 오후 1시 50분</div>
                        <div className="subject_location"> 상록아트홀 5층 아트홀</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainImg;