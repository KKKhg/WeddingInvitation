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
import AllComments from "./AllComments";
import isMobile from "../../utils/isMobile";

const emojis = ['👰🏻‍♀️❤️🤵🏻', '🌼', '🌸', '🍀'];

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [allCommentsOn, setAllCommentsOn] = useState(false);
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
            <div className="f-l" style={{paddingBottom: '2vh'}}>축하메시지</div>
            <Swiper
                spaceBetween={0}
                slidesPerView={2.5}
                freeMode={true}
                onReachEnd={onReachEnd}
                grabCursor={true}
                threshold={1}
                touchMoveStopPropagation={true}
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
                {
                    comments?.length < 5 ? 
                    <SwiperSlide>
                        <CommentCard 
                            empty={true}
                            emptyClick={() => setWriteCommentModalOn(true)}
                        />
                    </SwiperSlide> : null
                }
            </Swiper>
            <div className="comemntFooter">
                <Button color="black" onClick={() => setAllCommentsOn(true)}>전체 보기</Button>
                <Button color="black" onClick={() => setWriteCommentModalOn(true)}
                >축하메시지 작성</Button>
            </div>
            
            {/* 전체보기 모달 */}
            <BasicPortalModal
                modalOpen={allCommentsOn}
                closeCallback={() => setAllCommentsOn(false)}
                styles={{width: isMobile() ? '70%' : '320px' ,paddingLeft: '1%', paddingRight: '1%'}}
            >
                <AllComments afterRemove={setComments}
                            page={page.current}
                />
            </BasicPortalModal>
            
            
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