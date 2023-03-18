import React, { useEffect, useRef, useState } from 'react';
import { toast } from "react-toastify";
import { deleteComments, getComments } from "../../network";
import './AllComments.css';
import AllCommentsCard from "./AllCommentsCard";

const AllComments = () => {
    const [allComments, setAllComments] = useState([]);


    useEffect(() => {
        _getcomments();
    }, [])
    
    async function _getcomments() {
        const res = await getComments(0);
        if(res?.result) {
            setAllComments(res.data);
        }
    };
    
    async function removeClickHandler(idx) {
        let password = prompt('축하메세지를 삭제합니다. 비밀번호를 입력해주세요.');
        const res = await deleteComments(idx, password);
        if(res?.result === false) {
            return toast.error(res.msg);
        }
        if(res?.result === true) {
            _getcomments();
            toast.info(res.msg);
        }
    };
    
    
    return (
        <div className="allCommentsContainer">
            <div className="sub_title allCommentsTitle">축하메세지 목록</div>
            <div className="allCommentsWrap">
                {
                    allComments?.map((el, idx) => {
                        const dateTime = Intl.DateTimeFormat('ko', {dateStyle: 'full', timeStyle: 'short'}).format(new Date(el.created_at));
                        return (
                            <AllCommentsCard 
                                key={el.idx}
                                idx={el.idx}
                                author={el.author}
                                dateTime={dateTime}
                                comment={el.comment}
                                onRemoveClick={removeClickHandler}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default AllComments;