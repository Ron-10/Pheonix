import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import CorporateSolutions from '../components/home/CorporateSolutions';
import './Corporate.css';

const Corporate = () => {
    return (
        <div className="corporate-page">
            <PageHeader
                title="Corporate Solutions"
                subtitle="Empowering your business with tailored IT infrastructure, security, and software solutions designed for growth and efficiency."
            />

            {/* Intro Section */}
            <section className="corporate-intro container">
                <div className="intro-content">
                    <h2>Partnering for Your Success</h2>
                    <p>
                        In today's fast-paced digital landscape, having the right technology partner is crucial.
                        At Phoenix Trading, we don't just supply hardware; we provide comprehensive ecosystems
                        that streamline your operations. From setting up your office infrastructure to securing your data,
                        we are with you every step of the way.
                    </p>
                </div>
            </section>

            {/* Main Solutions Grid (Reused) */}
            <div className="solutions-wrapper">
                <CorporateSolutions />
            </div>

            {/* Our Process */}
            <section className="process-section container">
                <h2 className="section-title">How We Work</h2>
                <p className="section-subtitle">A streamlined approach to meeting your IT needs.</p>

                <div className="process-steps">
                    <div className="step-card">
                        <div className="step-number">01</div>
                        <h3>Consultation</h3>
                        <p>We analyze your business requirements and budget to recommend the best fit solutions.</p>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step-card">
                        <div className="step-number">02</div>
                        <h3>Implementation</h3>
                        <p>Our expert team ensures seamless installation and setup of your hardware and software.</p>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step-card">
                        <div className="step-number">03</div>
                        <h3>Support</h3>
                        <p>We provide ongoing maintenance and technical support to keep your business running smoothly.</p>
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="industries-section">
                <div className="container">
                    <h2 className="section-title">Industries We Serve</h2>
                    <div className="industries-grid">
                        <div className="industry-item">
                            <span className="industry-icon">🏦</span>
                            <span>Banking & Finance</span>
                        </div>
                        <div className="industry-item">
                            <span className="industry-icon">🎓</span>
                            <span>Education</span>
                        </div>
                        <div className="industry-item">
                            <span className="industry-icon">🏥</span>
                            <span>Healthcare</span>
                        </div>
                        <div className="industry-item">
                            <span className="industry-icon">🏭</span>
                            <span>Manufacturing</span>
                        </div>
                        <div className="industry-item">
                            <span className="industry-icon">🏨</span>
                            <span>Hospitality</span>
                        </div>
                        <div className="industry-item">
                            <span className="industry-icon">🏛️</span>
                            <span>Government</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Corporate;
