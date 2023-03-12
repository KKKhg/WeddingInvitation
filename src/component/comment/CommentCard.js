import React from 'react';
import './CommentCard.css';



const CommentCard = ({emoji, author, dateTime, comment}) => {
    
    return (
        <div className="commentCardWrap">
            {/* <div className="commentSubject">subject</div> */}
            <div className="commentSubject">{emoji}</div>
            <p>
                <pre>
                    {comment}
                </pre>
            </p>
            <div className="commentFooter">
                <div>- {author} -</div>
                <div>{dateTime}</div>
            </div>
        </div>      
    );
};

export default CommentCard;
