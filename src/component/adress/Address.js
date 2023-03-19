import './Address.css';
import Map from "./Map";
import {HiOutlineClipboardDocumentList} from 'react-icons/hi2';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import { Button } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Copy from "../Copy";
import AnimatedWrap from "../AnimatedWrap";
import BasicPortalModal from "../modal/BasicPortalModal";
import isMobile from "../../utils/isMobile";
import { useState } from "react";
import { toast } from "react-toastify";
import ShuttleMap from "./ShuttleMap";


const Address = () => {
    const [shuttleModalOn, setShuttleModalOn] = useState(false);
    const [isManual, SetIsManual] = useState(false);
    
    function _shuttleModalOn() {
        SetIsManual(true);
        setShuttleModalOn(true);
    };
    
    function _shuttleModaloff() {
        setShuttleModalOn(false);
        SetIsManual(false);
    }
    
    function autoShuttleModalOn() {
        let expire = localStorage.getItem('NOT_TODAY');
        if(expire && new Date().getTime() < expire) return;
        setShuttleModalOn(true);
    }
    return (
        <div className="address_wrap">
            <div className="f-xl">오시는 길</div>
            {/* <div className="sub_title">LOCATION</div> */}
            <Map />
            <div className="address_text_wrap">
                <div className="weddingHall_name f-l">상록아트홀 5F 아트홀</div>
                <div className="weddingHall_name f-l">
                    서울특별시 강남구 언주로 508
                    <Button className="copyBtn" color="black">
                        <Copy text='서울특별시 강남구 언주로 508'>
                            <span className="f-s"><HiOutlineClipboardDocumentList />복사</span>
                        </Copy>
                    </Button>
                </div>
                <br></br><br></br>
                <AnimatedWrap>
                    <div className="f-l">자가용 안내</div>
                    <div>
                        네비게이션 "상록아트홀" 또는 "서울시 강남구 언주로 508" 입력<br/>
                        동시주차 500대 가능<br/>
                        주차 90분무료, 이후 30분당 1700원부과
                    </div>
                </AnimatedWrap>
                <AnimatedWrap>
                    <br/>
                    <div className="f-l">지하철 안내</div>
                    <div>
                        2호선, 분당선 "선릉역" 5번출구 도보 5분<br/>
                        🚌 <span className="shuttle">선릉역 5번출구에서 셔틀버스 운행 (5분간격)</span>
                        <div className="shuttleBtnWrap" style={{textAlign: 'right'}}>
                            <AnimatedWrap callback={autoShuttleModalOn}>
                                <Button color="lightBlack" onClick={_shuttleModalOn}>
                                    <WhereToVoteIcon  /><span className="f-s">상세위치보기</span>
                                </Button>
                            </AnimatedWrap>
                        </div>
                    </div>
                </AnimatedWrap>
            </div>
            
            {/* 셔틀 상세 모달 */}
            <BasicPortalModal
                modalOpen={shuttleModalOn}
                closeCallback={_shuttleModaloff}
                // styles={{width: isMobile() ? '70%' : '320px' ,paddingLeft: '1%', paddingRight: '1%'}}
                styles={{width: isMobile() ? '90%' : '320px', paddingLeft: '1%', paddingRight: '1%', paddingBottom: isManual ? '5%' : '2%'}}
            >
                <ShuttleMap closeCallback={_shuttleModaloff} isManual={isManual}/>
            </BasicPortalModal>
        </div>
    );
};

export default Address