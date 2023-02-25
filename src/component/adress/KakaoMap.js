import { useEffect, useState } from "react";
import './KakaoMap.css';

const KakaoMap = () => {
    const [cnt, setCnt] = useState(0);
    
    useEffect(() => {
        if(cnt < 1) setCnt(prev => ++prev);
        else if(cnt == 1) {
            const container = document.querySelector('.map');
            const options = {
                center: new window.kakao.maps.LatLng('37.503874', '127.042873'),
                level: 3
            }
            const map = new window.kakao.maps.Map(container, options);
        }
    }, [cnt]);
    
    
    return (
        <div className="map">

        </div>
    );
};

export default KakaoMap;