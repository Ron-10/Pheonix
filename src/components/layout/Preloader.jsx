import React, { useEffect, useState } from 'react';
import './Preloader.css';
import logo from '../../assets/phoenix.png';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
            setTimeout(() => setLoading(false), 500); // Wait for fade out animation
        }, 2000); // Show preloader for 2 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className={`preloader ${fade ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                <img src={logo} alt="Phoenix Trading" className="preloader-logo" />
                <div className="loader-bar">
                    <div className="loader-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
