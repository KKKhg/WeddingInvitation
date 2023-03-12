import { Button, buttonBaseClasses } from "@mui/material";
import { useEffect } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import './Footer.css';


const Footer = () => {
   
    function sendKakaoLink() {
        window.Kakao.Share.sendCustom({
            templateId: 90482,
          });
    }
    
    return (
        <div className="footer_wrap">
            <span>Copyright KHG</span>
            <div className="fix_button">
                <Button variant="contained"
                startIcon={<RiKakaoTalkFill />}
                color='kakao'
                style={{
                    borderRadius: 50
                }}
                onClick={sendKakaoLink}
                >공유하기</Button>
            </div>
        </div>
    )
};

export default Footer;