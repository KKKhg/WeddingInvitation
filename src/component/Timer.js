import { useEffect, useState } from "react";
import { pad } from "../utils/StringUtils";
import './Timer.css';

const Timer = () => {
    const d_day = new Date('2023-06-25 13:50:00').getTime();
    const [remainDttm, setRemainDttm] = useState();
    
    useEffect(() => {
        countRemainTime();
        const interval = setInterval(() => {
            countRemainTime();
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    
    function countRemainTime() {
        const now = new Date().getTime();
        const remainTime = d_day - now;
        const _remainTime = convert(remainTime);
        setRemainDttm(`${_remainTime.d}일 ${_remainTime.h}시간 ${_remainTime.m}분 ${_remainTime.s}초`)
    };
    
    function convert(timeStamp) {
        const day = Math.floor(timeStamp/(1000*60*60*24));
        timeStamp -= day*1000*60*60*24;
        const hour = Math.floor(timeStamp/(1000*60*60));
        timeStamp -= hour*1000*60*60;
        const minute = Math.floor(timeStamp/(1000*60));
        timeStamp -= minute*1000*60;
        const second = Math.floor(timeStamp/(1000));
        return {d: pad(day, 2), h: pad(hour, 2), m: pad(minute, 2), s: pad(second, 2)};
    }
    
    return (
        <div className="timer_wrapper">
            결혼식까지 {remainDttm} 남았습니다.<br />
        </div>
    )
}

export default Timer;