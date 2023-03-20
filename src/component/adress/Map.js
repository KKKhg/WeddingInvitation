import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import './Map.css';
import isMobile from '../../utils/isMobile';
import { SiKakao } from 'react-icons/si';

const Map = () => {
    const [cnt, setCnt] = useState(0);
    const lat = 37.503874;
    const lon = 127.042873
    
    useEffect(() => {
        if(cnt < 1) setCnt(prev => ++prev);
        else if(cnt == 1) {
 
            const container = document.querySelector('.map');
            const options = {
                center: new window.kakao.maps.LatLng(lat, lon),
                level: 4
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
    
    function kakaoMapLinkTo() {
        window.open('https://map.kakao.com/link/to/2009675378', '_blank');
    }
    
    function tMapLinkTo() {
        if(!isMobile()) return alert('모바일에서만 사용 가능합니다.');
        window.open(`https://apis.openapi.sk.com/tmap/app/routes?appKey=AvH2FYuxSc6ARNU1ejGGj8UYBwiZavbQ3Gib84QS&name=상록아트홀&lon=${lon}&lat=${lat}`, '_blank');
        
    }
    
    function naverMapLinkTo() {
        if(!isMobile()) return alert('모바일에서만 사용 가능합니다.');
        let url = `nmap://route/public?parameter=value&appname=WeddingInvitation`;
        url += `&dlat=${lat}`;
        url += `&dlng=${lon}`;
        url += `&dname=${encodeURI('상록아트홀')}`
        window.open(url, '_blank');
    }
    
    return (
        <div className="map_wrapper">
            <div>
                <div className="map" />
            </div>
            <div className="map_btn_wrapper">
                <div>
                    <Button onClick={kakaoMapLinkTo}>
                        <img className="map_icon" src={require('../../assets/images/kakao_map.png')}/>
                    </Button>
                    <div>카카오</div>
                </div>
                <div>
                    <Button onClick={naverMapLinkTo}>
                        <img className="map_icon" src={require('../../assets/images/naver_map.png')}/>
                    </Button>
                    <div>네이버</div>
                </div>
                <div>
                    <Button onClick={tMapLinkTo}>
                        <img className="map_icon" src={require('../../assets/images/t_map.png')}/>
                    </Button>
                    <div>티맵</div>
                </div>
            </div>
        </div>
    );
};

export default Map;