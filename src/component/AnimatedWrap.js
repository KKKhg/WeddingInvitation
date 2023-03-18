import React from 'react';
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const AnimatedWrap = ({children, direction = 'up', duration = 1, delay = 0}) => {
    
    const animatedItem = useScrollFadeIn(direction, duration, delay);

    return (
        <div {...animatedItem}>
            {children}
        </div>
    )
};

export default AnimatedWrap;