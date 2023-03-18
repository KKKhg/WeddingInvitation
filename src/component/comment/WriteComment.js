import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import { insertComment } from "../../network";
import './WriteComment.css';

const WriteComment = ({closeCallback}) => {
    
    const [author, setAuthor] = useState('');
    const [password, setPassword] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState({
        author: false,
        password: false,
        comment: false
    });
    
    function _setAuthor(newValue) {
        if(newValue?.length > 10) {
            setError((prev) => ({...prev, author: true}));
            return toast.error('이름은 10자 이하로 입력해주세요ßßß');
        } else {
            setError((prev) => ({...prev, author: false}));
            setAuthor(newValue);
        }
    };
    
    function _setPassword(newValue) {
        if(newValue?.length > 20) {
            setError((prev) => ({...prev, password: true}));
            return toast.error('비밀번호는 20자 이하로 입력해주세요');
        } else {
            setError((prev) => ({...prev, password: false}));
            setPassword(newValue);
        }
    };
    
    function _setComment(newValue) {
        if(newValue?.length > 100) {
            setError((prev) => ({...prev, comment: true}));
            return toast.error('내용은 100자 이하로 입력해주세요');
        } else {
            setError((prev) => ({...prev, comment: false}));
            setComment(newValue);
        }
    };
    
    async function submit (){
        if(!author) {
            setError((prev) => ({...prev, author: true}));
            return toast.error('이름을 입력해주세요');
        };
        setError((prev) => ({...prev, author: false}));
        
        if(!password) {
            setError((prev) => ({...prev, password: true}));
            return toast.error('비밀번호를 입력해주세요');
        };
        setError((prev) => ({...prev, password: false}));   
        
        if(!comment) {
            setError((prev) => ({...prev, comment: true}));
            return toast.error('내용을 입력해주세요');
        };
        setError((prev) => ({...prev, comment: false}));
        const res = await insertComment(author, password, comment);
        if(res.result) {
            toast.success(res.msg);
            closeCallback();
        }
    }
    
    return (
        <div className="writeCommentModalWrap">
            <div className="sub_title writeCommentModaltitle">방명록 작성</div>
            <div className="writeWrap1">
                <div>
                    <TextField 
                        error={error.author}
                        color="black"
                        variant="standard" 
                        label='이름'
                        size="small"
                        value={author}
                        onChange={(event) => _setAuthor(event.target.value)}
                    />
                </div>
                <div>
                    <TextField 
                        error={error.password}
                        color="black"
                        variant="standard" 
                        label='비밀번호'
                        type='password'
                        size="small"
                        value={password}
                        onChange={(event) => _setPassword(event.target.value)}
                    />
                </div>
            </div>
            <div className="writeWrap2">
                <TextField 
                    error={error.comment}
                    color="black"
                    variant="filled"
                    label='내용'
                    multiline
                    rows={5}
                    value={comment}
                    onChange={(event) => _setComment(event.target.value)}
                />
                <div className="commentLength">
                    {comment ? comment.length : 0} / 100
                </div>
            </div>
            <div className="writeCommentBtn">
                <Button
                    color="black"
                    variant="outlined"
                    fullWidth={true}
                    onClick={submit}
                >방명록 저장</Button>
            </div>
        </div>
    );
};

export default WriteComment;