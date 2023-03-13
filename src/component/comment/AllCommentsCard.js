import React from 'react';
import './AllCommentsCard.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const AllCommentsCard = ({idx, author, comment, dateTime, onRemoveClick}) => {
    
    function _onRemoveClick() {
        onRemoveClick(idx);
    };
    
    return (
        <div className="allCommentsCardWrap">
            <hr/>
            <div className="allCommentsCardTitle">
                <span>{author}</span>
                <a onClick={_onRemoveClick}>
                    <CloseRoundedIcon fontSize="small" />
                </a>
            </div>
            <div className="allCommentsContent">
                {comment}
            </div>
            <div className="allCommentsDateTime">
                {dateTime}
            </div>
        </div>
    )
};

export default AllCommentsCard;