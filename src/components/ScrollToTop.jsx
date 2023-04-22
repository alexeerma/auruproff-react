import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';



const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className="fixed border-none rounded-full" style={{display: isVisible ? 'block':'hidden'}} onClick={goTop}>
            <FaArrowCircleUp/>
        </button>
    );
}

export default ScrollToTop;