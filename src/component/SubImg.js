import React from 'react';
import AnimatedWrap from "./AnimatedWrap";
import './SubImg.css';


const SubImg = () => {
    return (
        <div className="subImg_wrap">
            <AnimatedWrap>
                <img src={require('../assets/images/sub_img1.png')}
                    width='100%'
                />
            </AnimatedWrap>
            <AnimatedWrap>
                <img src={require('../assets/images/flower.png')} width='10%'/>
            </AnimatedWrap>
            <AnimatedWrap>
                <div>
                    <p className="inviteMent">
                        만개한 꽃잎들을 지나<br />
                        푸르름이 더욱 짙어오는<br />
                        6월 어느 날, 우리는<br />
                        더 긴 약속을 하기로 했습니다.<br />
                        <br />
                        여섯 해의 사랑이<br />
                        온전한 열매를 맺는 날,<br />
                        축하와 격려로<br />
                        자리를 빛내주세요.<br />
                    </p>
                    <p>
                        <br />
                        강명석 · 김순영 <span className="f-s lg">의 아들</span> 현구<br />
                        안성포 · 최은주 <span className="f-s lg">의 &nbsp;딸</span>&nbsp; 유진
                        {/* 6월의 신랑 신부<br />
                        현구, 유진 드림 */}
                    </p>
                </div>
            </AnimatedWrap>
        </div>        
    );
};

export default SubImg;