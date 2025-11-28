import React from 'react';
import './Home.css';

const HomeIntro = () => {
    return (
        <section className="intro-section">
            <div className="intro-bg-pattern"></div>
            <div className="container">
                <div className="intro-content animate-fade-in">
                    <div className="intro-watermark">2010</div>
                    <p className="intro-text">
                        Established in <span className="highlight-year">2010</span>, located at the heart of the central Business Hub in Kathmandu,
                        Phoenix Trading serves renowned International brands all over the country.
                    </p>
                    <div className="intro-stat-box">
                        <span className="stat-icon">✨</span>
                        Authorized Distributor for Wanbo, ViewSonic, Philips, Unitek, Aiwa, ESET, and Tenda.
                    </div>
                    <div className="philosophy-highlight">
                        <span className="quote-mark">"</span>
                        <span className="quote">Commitment to Quality.</span>
                        <span className="quote-mark">"</span>
                    </div>
                </div>
            </div>
            <div className="values-ticker-wrapper">
                <div className="values-ticker">
                    <span>Respect for the Individual</span> •
                    <span>Service to the Customer</span> •
                    <span>Excellence</span> •
                    <span>Honesty</span> •
                    <span>Responsibility</span> •
                    <span>Respect for the Individual</span> •
                    <span>Service to the Customer</span> •
                    <span>Excellence</span> •
                    <span>Honesty</span> •
                    <span>Responsibility</span>
                </div>
            </div>
        </section>
    );
};

export default HomeIntro;
