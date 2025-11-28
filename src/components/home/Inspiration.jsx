import React from 'react';
import './Home.css';

const Inspiration = () => {
    return (
        <section className="inspiration-section">
            <div className="inspiration-bg-pattern"></div>
            <div className="inspiration-blob blob-1"></div>
            <div className="inspiration-blob blob-2"></div>

            <div className="container relative-z">
                <div className="inspiration-header animate-fade-in">
                    <h2 className="section-title">Inspiration</h2>
                    <div className="title-underline"></div>
                    <p className="inspiration-main-text">
                        Our company philosophy has always been focusing on customer satisfaction with uncompromising integrity.
                        Phoenix Trading carries products and services with the finest value and quality in the market.
                        We ensure that our sales persons and customer service representatives generate enthusiasm and respond
                        with extra efforts in addressing our customers’ expectations and needs. We are always looking for new
                        and better ways to improve business relationships.
                    </p>
                    <p className="inspiration-sub-text">
                        From continuous success and hard work, we are inspired by the fact that educating the people around
                        about “what they really need and how we can help them” with honesty & transparency is the only way
                        to convert the vision into reality.
                    </p>
                </div>

                <div className="inspiration-grid">
                    {/* Column 1: VISION */}
                    <div className="inspiration-card">
                        <div className="card-content">
                            <div className="card-icon-wrapper">
                                <span className="card-icon">👁️</span>
                            </div>
                            <h3>Vision</h3>
                            <p>
                                To reach to the unreached people bridging the gap between technology and the people.
                            </p>
                        </div>
                        <div className="card-decoration"></div>
                    </div>

                    {/* Column 2: MISSION */}
                    <div className="inspiration-card featured-card">
                        <div className="card-content">
                            <div className="card-icon-wrapper">
                                <span className="card-icon">🚀</span>
                            </div>
                            <h3>Mission</h3>
                            <p>
                                To bring the finest technology and services to the technological community, and to our partners
                                with the life-long goal – ‘Build Customer for Life’ with ‘Never Give Up’ theory.
                            </p>
                        </div>
                        <div className="card-decoration"></div>
                    </div>

                    {/* Column 3: INNOVATION */}
                    <div className="inspiration-card">
                        <div className="card-content">
                            <div className="card-icon-wrapper">
                                <span className="card-icon">💡</span>
                            </div>
                            <h3>Innovation</h3>
                            <p>
                                We believe: ‘Success is sure but you need to have one successful system’, our customers say
                                ‘We have the successful system, so definitely we will get success."
                            </p>
                        </div>
                        <div className="card-decoration"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inspiration;
