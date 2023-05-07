import { Button, buttonBaseClasses } from "@mui/material";
import { useEffect } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import './Footer.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Footer = ({template}) => {
    let kakaoTemplateId = template == 'na' ? 93460 : 90482;
    
    function sendKakaoLink() {
        window.Kakao.Share.sendCustom({
            templateId: kakaoTemplateId,
          });
    }
    
    return (
        <div className="footer_wrap">
            <span className="f-xs">Copyright © 2023 KHG</span>
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
            <ToastContainer 
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                limit={1}
                />
        </div>
    )
};

export default Footer;