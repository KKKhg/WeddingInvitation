import React from 'react';
import './CommentCard.css';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { Button } from "@mui/material";


const CommentCard = ({emoji, author, dateTime, comment, empty = false, emptyClick}) => {
    
    return (
        <div className="commentCardWrap">
            {
                empty === false ? 
                <>
                    <div className="commentSubject">{emoji}</div>
                    <p className="comment">{comment}</p>
                    <div className="commentFooter">
                        <div>- {author} -</div>
                        <div>{dateTime}</div>
                    </div>
                </>
                :
                <div className="comment" style={{transform: 'translate(0%, 50%)'}} onClick={emptyClick}>
                    <CreateRoundedIcon /><br/>
                    <span>방명록 작성하기</span>
                </div>
            }
        </div>      
    );
};

export default CommentCard;
