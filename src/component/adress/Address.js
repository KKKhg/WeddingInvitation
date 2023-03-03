import './Address.css';
import Map from "./Map";
import {HiOutlineClipboardDocumentList} from 'react-icons/hi2';
import { Button } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Copy from "../Copy";
const Address = () => {
  
    return (
        <div className="address_wrap">
            <div className="f-xl">오시는 길</div>
            <div className="sub_title">LOCATION</div>
            <Map />
            <div className="address_text_wrap">
                <div className="f-l">상록아트홀 5F 아트홀</div>
                <div className="f-l">
                    서울특별시 강남구 언주로 508
                    <Button className="copyBtn" color="black">
                        <Copy text='서울특별시 강남구 언주로 508'>
                            <span className="f-s"><HiOutlineClipboardDocumentList />복사</span>
                        </Copy>
                    </Button>
                </div>
                <br></br><br></br>
                <div className="f-l">자가용 안내</div>
                <div>
                    네비게이션 "상록아트홀" 또는 "서울시 강남구 언주로 508" 입력<br/>
                    동시주차 500대 가능<br/>
                    주차 90분무료, 이후 30분당 1700원부과
                </div>
                <br/>
                <div className="f-l">지하철 안내</div>
                <div>
                    2호선, 분당선 "선릉역" 5번출구 도보 5분<br/>
                    🚌 <span className="shuttle">선릉역 5번출구에서 셔틀버스 운행 (5분간격)</span>
                </div>
            </div>
        </div>
    );
};

export default Address