import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import './About.css';

import rahulImg from '../assets/Rahul.png';

const About = () => {
    return (
        <div className="about-page">
            <PageHeader
                title="About Us"
                subtitle="Guided by a clear vision, we have evolved into a prominent national organization, bridging the gap between technology and people."
            />

            <div className="container">
                {/* Company Story & Mission */}
                <section className="about-story-section animate-fade-in">
                    <div className="story-content">
                        <div className="section-label">Our Story</div>
                        <h2>A Legacy of Excellence</h2>
                        <p>
                            Phoenix Trading began with a simple yet powerful vision: to bring the world's finest technology to Nepal.
                            Over the years, we have evolved from a small trading concern into a prominent national organization.
                            For us, the company is not just a business; it is our life's work and our soul. We are driven by a passion
                            for innovation and a commitment to quality that permeates everything we do.
                        </p>
                    </div>
                    <div className="mission-content">
                        <div className="section-label">Our Mission</div>
                        <h2>Bridging the Gap</h2>
                        <p>
                            Our mission is to reach the unreached, bridging the digital divide between technology and the people.
                            We strive to bring the finest technology and services to every corner of the nation.
                            Our life-long goal is simple yet profound:
                        </p>
                        <div className="mission-highlight">
                            'Build Customer for Life'
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="values-section">
                    <h2 className="section-title">Our Core Values</h2>
                    <p className="section-subtitle">The principles that guide every decision we make.</p>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Honesty</h3>
                            <p>We believe in transparent dealings and truthful communication with our partners and customers.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🛡️</div>
                            <h3>Responsibility</h3>
                            <p>We take full ownership of our actions and their impact on our community and stakeholders.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">💡</div>
                            <h3>Consciousness</h3>
                            <p>We are mindful of our role in the ecosystem and strive to make positive contributions.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🚀</div>
                            <h3>Innovation</h3>
                            <p>We constantly seek new ways to improve and bring the latest technology to the market.</p>
                        </div>
                    </div>
                </section>

                {/* Chairman's Message */}
                <section className="chairman-section">
                    <div className="chairman-card">
                        <div className="chairman-image-column">
                            <img src={rahulImg} alt="Mr. Rahul Lal Shrestha" className="chairman-img" />
                        </div>
                        <div className="chairman-info">
                            <div className="quote-icon">❝</div>
                            <h3>Chairman's Message</h3>
                            <div className="chairman-quote">
                                "At Phoenix Trading, we are dedicated to fostering strong partnerships that fuel our
                                consistent and sustainable growth. We continually enhance our core competencies
                                to ensure customer satisfaction remains our top priority. We cannot compromise for our whole life
                                and betray our soul for short term gain."
                            </div>
                            <div className="chairman-signature">
                                <strong>Mr. Rahul Lal Shrestha</strong>
                                <span>Chairman - Phoenix Trading</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Us / Philosophy */}
                <section className="why-us-section">
                    <div className="why-us-content">
                        <h2>Why Choose Us?</h2>
                        <p className="philosophy-text">
                            "We build relationships that last. Our commitment to quality, integrity, and customer service
                            sets us apart in a crowded marketplace."
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
