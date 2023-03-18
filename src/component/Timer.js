import { useEffect, useState } from "react";
import { pad } from "../utils/StringUtils";
import './Timer.css';

const Timer = () => {
    const d_day = new Date('2023-06-25 13:50:00').getTime();
    const [remainDttm, setRemainDttm] = useState({
        d: 0,
        h: 0,
        m: 0,
        s: 0
    });
    
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
        setRemainDttm(convert(remainTime));
    };
    
    function MiniCard({top, bottom}) {
        return (
            <div className="miniCard">
                <div>{top}</div>
                <div>{bottom}</div>
            </div>
        )
    }
    
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
            <div className="timer_line">
                <div className="timer_title">우리 결혼까지</div>
                <div className="miniCardWrap">
                    <MiniCard top={remainDttm.d} bottom='DAY'/>
                    <MiniCard top={remainDttm.h} bottom='HOUR'/>
                    <MiniCard top={remainDttm.m} bottom='MINUTE'/>
                    <MiniCard top={remainDttm.s} bottom='SECOND'/>
                </div>
            </div>
        </div>
    )
}

export default Timer;