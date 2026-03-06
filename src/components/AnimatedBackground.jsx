import React from 'react';
import '../styles/AnimatedBackground.css';

const AnimatedBackground = () => {
    return (
        <div className="animated-bg-container">
            <div className="geometric-shape shape-1"></div>
            <div className="geometric-shape shape-2"></div>
            <div className="geometric-shape shape-3"></div>
            <div className="geometric-shape shape-4"></div>
            <div className="grid-overlay"></div>
        </div>
    );
};

export default AnimatedBackground;
