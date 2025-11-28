import React from 'react';
import './Home.css';

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
                        <div className="about-text">
                            <p>
                                Established in 2010 in the heart of Kathmandu, Phoenix Trading bridges the gap between
                                technology and the people. We are committed to bringing the finest technology and services
                                to the community.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                With over a decade of experience, we have established ourselves as a trusted partner for global
                                technology brands. Our journey is defined by a relentless pursuit of excellence and a deep
                                understanding of the local market. We believe in empowering businesses and individuals with
                                tools that enhance productivity and lifestyle. From enterprise-grade security solutions to
                                immersive home entertainment, Phoenix Trading is your gateway to the future of technology.
                            </p>
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
