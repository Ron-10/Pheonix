import React from 'react';
import './Home.css';

import rahulImg from '../../assets/Rahul.png';

const values = [
    { title: 'Respect', icon: '🙏', desc: 'For the Individual' },
    { title: 'Service', icon: '🤲', desc: 'To the Customer' },
    { title: 'Excellence', icon: '⭐', desc: 'In pursuit of goals' },
    { title: 'Honesty', icon: '🛡️', desc: 'Responsibility & Consciousness' }
];

const AboutValues = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="chairman-message">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>About Us</h2>

                        <div className="chairman-content-wrapper">
                            <div className="chairman-image-container">
                                <img src={rahulImg} alt="Mr. Rahul Lal Shrestha" className="chairman-home-img" />
                            </div>
                            <div className="quote-box">
                                <p className="quote-text">
                                    "Dedicated to fostering strong partnerships that fuel consistent sustainable growth.
                                    Our life-long goal is to 'Build Customer for Life' with a 'Never Give Up' theory."
                                </p>
                                <div className="quote-author">
                                    <strong>Mr. Rahul Lal Shrestha</strong>
                                    <span>Chairman</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="values-container">
                        <h3 className="values-title">Our Core Values</h3>
                        <div className="values-grid">
                            {values.map((val, index) => (
                                <div key={index} className="value-card">
                                    <div className="value-icon">{val.icon}</div>
                                    <h4>{val.title}</h4>
                                    <p>{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutValues;
