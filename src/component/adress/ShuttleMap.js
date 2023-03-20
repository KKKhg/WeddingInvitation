import { Button } from "@mui/material";
import React, { useEffect, useState } from 'react';
import './ShuttleMap.css';
import CloseIcon from '@mui/icons-material/Close';

const ShuttleMap = ({closeCallback, isManual}) => {
    const [cnt, setCnt] = useState(0);
    const lat = 37.50435461910793;
    const lon = 127.04772659052212;
    
    useEffect(() => {
        if(cnt < 1) setCnt(prev => ++prev);
        else if(cnt == 1) {
 
            const container = document.querySelector('.shuttleMap');
            const options = {
                center: new window.kakao.maps.LatLng(lat, lon),
                level: 3
            }
            const map = new window.kakao.maps.Map(container, options);
            
            // 마커 표시
            const markerPosition  = new window.kakao.maps.LatLng(lat, lon); 
            const marker = new window.kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
            
            // 줌 컨트롤러 생성
            const zoomControl = new window.kakao.maps.ZoomControl();
            map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
        }
    }, [cnt]);
    
    function notTodayHandler() {
        closeCallback();
        localStorage.setItem('NOT_TODAY', new Date().getTime() + 24 * 60 * 60 * 1000);
    }
    
    return (
        <div className="shuttleMapWrapper">
            <div  style={{fontSize: '1.3rem'}}>셔틀버스 상세위치 안내</div>
            <div>선릉역 5번출구 앞(5분 간격 순환버스)</div>
            <div className="shuttleMap" />
            {
                isManual === true ? null
                :
                <div className="f-s" style={{textAlign: 'right', paddingRight: '2%', marginTop: '5ß%'}}>
                    <Button color="black" onClick={notTodayHandler}><CloseIcon fontSize="small"/>하루동안 열지 않기</Button>
                </div>
            }
        </div>
    )
}

export default ShuttleMap;