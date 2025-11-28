import React from 'react';
import './Home.css';

const CorporateSolutions = () => {
    return (
        <section className="corporate-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Corporate Solutions</h2>
                    <p className="section-subtitle">
                        We offer custom tailored IT Solutions fit to your budget and business model.
                        Helping your organization manage cost and resource for better performance.
                    </p>
                </div>

                <div className="solutions-grid">
                    <div className="solution-card glass-effect">
                        <div className="card-glow"></div>
                        <div className="solution-icon-wrapper">
                            <div className="solution-icon">🖥️</div>
                        </div>
                        <h3>Hardware Supply</h3>
                        <p>Comprehensive hardware solutions for your enterprise needs.</p>
                        <ul className="solution-list">
                            <li>Laptops & Desktops</li>
                            <li>Projectors</li>
                            <li>Tablets & Smartphones</li>
                            <li>Printers & Scanners</li>
                        </ul>
                        <div className="card-arrow">→</div>
                    </div>

                    <div className="solution-card glass-effect">
                        <div className="card-glow"></div>
                        <div className="solution-icon-wrapper">
                            <div className="solution-icon">🔒</div>
                        </div>
                        <h3>Infrastructure & Security</h3>
                        <p>Robust infrastructure and security systems for safety and efficiency.</p>
                        <ul className="solution-list">
                            <li>EPABX Systems</li>
                            <li>CCTV Surveillance</li>
                            <li>Access Control Systems</li>
                            <li>Fire Alarms</li>
                        </ul>
                        <div className="card-arrow">→</div>
                    </div>

                    <div className="solution-card glass-effect">
                        <div className="card-glow"></div>
                        <div className="solution-icon-wrapper">
                            <div className="solution-icon">💿</div>
                        </div>
                        <h3>Software Licensing</h3>
                        <p>Authorized licensing for essential business software.</p>
                        <ul className="solution-list">
                            <li>Microsoft Windows</li>
                            <li>Microsoft Office</li>
                            <li>Adobe Acrobat</li>
                            <li>Antivirus Solutions</li>
                        </ul>
                        <div className="card-arrow">→</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateSolutions;
