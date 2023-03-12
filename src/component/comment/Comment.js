import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import './Comment.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import CommentCard from "./CommentCard";
import { Button } from "@mui/material";
import BasicPortalModal from "../modal/BasicPortalModal";
import WriteComment from "./WriteComment";
import { getComments } from "../../network";

const emojis = ['👰🏻‍♀️❤️🤵🏻', '🌼', '🌸', '🍀'];

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [writeCommentModalOn, setWriteCommentModalOn] = useState(false);
    const page = useRef(1);
    const isFirstReachEnd = useRef(true);
    const isCommentsEnd = useRef(false);
    
    useEffect(() => {
        _getcomments();
    }, [])
    
    async function _getcomments() {
        if(isCommentsEnd.current) return;
        const res = await getComments(page.current);
        console.log("🚀 ~ file: Comment.js:21 ~ _getcomments ~ res:", res);
        if(res?.result) {
            if(res.data?.length < 1) isCommentsEnd.current = true;
            page.current += 1;
            setComments((prev) => ([...prev, ...res.data]));
        }
    }
    
    async function _resetComments() {
        page.current = 1;
        isCommentsEnd.current = false;
        const res = await getComments(page.current);
        console.log("🚀 ~ file: Comment.js:21 ~ _getcomments ~ res:", res);
        if(res?.result) {
            page.current += 1;
            setComments([...res.data]);
        }
    }
    
    function onReachEnd() {
        if(isFirstReachEnd.current) return isFirstReachEnd.current = false;
        _getcomments();
    }
    
    function onEndWriting() {
        _resetComments();
        setWriteCommentModalOn(false);
    };
    
    return (
        <div className="commentWrap">
            <div className="f-l">방명록</div>
            <Swiper
                spaceBetween={0}
                slidesPerView={2.5}
                freeMode={true}
                onReachEnd={onReachEnd}
            >
                {
                    comments?.map((el, idx) => {
                        return (
                            <SwiperSlide key={el.idx}>
                                <CommentCard 
                                    emoji={emojis[(idx % emojis.length)]}
                                    author={el.author}
                                    dateTime={el.created_at?.substring(5,16)}
                                    comment={el.comment}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="comemntFooter">
                <Button color="black">전체 보기</Button>
                <Button color="black"
                    onClick={() => setWriteCommentModalOn(true)}
                >방명록 작성</Button>
            </div>
            
            
            {/* 방명록 작성 모달*/}
            <BasicPortalModal
                modalOpen={writeCommentModalOn}
                closeCallback={() => setWriteCommentModalOn(false)}
            >
               <WriteComment closeCallback={onEndWriting}/>
            </BasicPortalModal>
            
        </div>
    );
};

export default Comment;