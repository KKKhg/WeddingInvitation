import React from 'react';
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const AnimatedWrap = ({children, threadhold}) => {
    
    const animatedItem = useScrollFadeIn(threadhold);

    return (
        <div {...animatedItem}>
            {children}
        </div>
    )
};

export default AnimatedWrap;