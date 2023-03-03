import React from 'react';
import './SubImg.css';


const SubImg = () => {
    return (
        <div className="subImg_wrap">
            <img src={require('../assets/images/sub_img2.jpeg')}
                width='100%'
            />
            <div>
                초대장?<br/>
                ㅇㅇㅇ ㅇㅇㅇ 아들 현구<br/>
                ㅇㅇㅇ ㅇㅇㅇ 아들 현구<br/>
                좋은 글<br/>
                좋은 글<br/>
                좋은 글<br/>
                좋은 글<br/>
                좋은 글<br/>
                좋은 글<br/>
            </div>
        </div>        
    );
};

export default SubImg;