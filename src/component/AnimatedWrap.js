import React, { useEffect } from 'react';
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const AnimatedWrap = ({children, callback}) => {
    
    const animatedItem = useScrollFadeIn(callback);
    
    return (
        <div {...animatedItem}>
            {children}
        </div>
    )
};

export default AnimatedWrap;