import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Show button when scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top"
                    aria-label="Scroll to top"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 15l-6-6-6 6" />
                    </svg>
                </button>
            )}
            <style>{`
                .scroll-to-top {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    background-color: var(--color-primary);
                    color: white;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    z-index: 999;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    opacity: 0;
                    animation: fadeIn 0.3s forwards;
                }

                .scroll-to-top:hover {
                    background-color: var(--color-primary-dark);
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
                }

                @keyframes fadeIn {
                    to { opacity: 1; }
                }

                @media (max-width: 768px) {
                    .scroll-to-top {
                        bottom: 1.5rem;
                        right: 1.5rem;
                        width: 45px;
                        height: 45px;
                    }
                }
            `}</style>
        </>
    );
};

export default ScrollToTop;
