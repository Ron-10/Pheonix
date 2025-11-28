import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg-glow" />

            <div className="container hero-container">
                {/* LEFT */}
                <div className="hero-content animate-fade-in">
                    <div className="hero-badge-wrapper">
                        <span className="hero-badge">
                            <span className="badge-dot" />
                            Authorized Distributor • Nepal
                        </span>
                    </div>

                    <p className="hero-kicker">
                        Distribution • Service • Support
                    </p>

                    <h1 className="hero-headline">
                        Every Great Business <br />
                        Is Built On <span className="highlight-text">Friendship.</span>
                    </h1>

                    <p className="hero-subtext">
                        We bridge the gap between world-class technology and the people of Nepal.
                        Partner with a distributor that treats every shipment like a relationship.
                    </p>

                    <div className="hero-cta-group">
                        <Link to="/brands" className="btn btn-primary btn-lg">
                            Explore Our Brands
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </Link>

                        <Link to="/partner" className="btn btn-outline btn-lg">
                            Partner With Us
                        </Link>
                    </div>


                </div>

                {/* RIGHT */}
                <div className="hero-visual animate-float">
                    <div className="handshake-container">
                        <div className="handshake-visual">
                            🤝
                        </div>
                    </div>
                </div>

                <div className="hero-trust-row">
                    <div className="hero-trust-indicators">
                        <div className="trust-item">
                            <div className="trust-icon">🏆</div>
                            <div className="trust-text">
                                <strong>15+ Years</strong>
                                <span>Industry Excellence</span>
                            </div>
                        </div>

                        <div className="trust-item">
                            <div className="trust-icon">🤝</div>
                            <div className="trust-text">
                                <strong>500+</strong>
                                <span>Active Partners</span>
                            </div>
                        </div>

                        <div className="trust-item">
                            <div className="trust-icon">🚚</div>
                            <div className="trust-text">
                                <strong>Nationwide</strong>
                                <span>Fulfillment</span>
                            </div>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon">⭐</div>
                            <div className="trust-text">
                                <strong>4.9/5 Rating</strong>
                                <span>Customer Satisfaction</span>
                            </div>
                        </div>

                        <div className="trust-item">
                            <div className="trust-icon">📦</div>
                            <div className="trust-text">
                                <strong>250K+ Orders</strong>
                                <span>Fulfilled Successfully</span>
                            </div>
                        </div>
                    </div>

                    <p className="trust-caption">
                        Trusted by resellers, retailers & enterprise teams across Nepal.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
