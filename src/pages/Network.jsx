import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import BusinessNetwork from '../components/home/BusinessNetwork';
import './Network.css';

const Network = () => {
    return (
        <div className="network-page">
            <PageHeader
                title="Our Network"
                subtitle="Connecting the nation through a robust and expanding network of trusted partners and dealers."
            />

            {/* Stats Section */}
            <section className="network-stats container">
                <div className="stat-card">
                    <div className="stat-number">25+</div>
                    <div className="stat-label">Major Cities</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Retail Partners</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">10k+</div>
                    <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Years of Service</div>
                </div>
            </section>

            {/* Main Network Content (Reused) */}
            <div className="network-wrapper">
                <BusinessNetwork />
            </div>

            {/* Join Network CTA */}
            <section className="join-network-section">
                <div className="container">
                    <div className="join-card">
                        <div className="join-content">
                            <h2>Become a Partner</h2>
                            <p>
                                Join our growing network of dealers and retailers.
                                Benefit from our extensive product range, marketing support, and competitive margins.
                            </p>
                            <ul className="benefits-list">
                                <li>Exclusive Product Access</li>
                                <li>Marketing Materials & Support</li>
                                <li>Technical Training</li>
                                <li>Attractive Margins</li>
                            </ul>
                            <a href="/contact" className="btn btn-primary">Apply Now</a>
                        </div>
                        <div className="join-image">
                            {/* Abstract Graphic or Icon */}
                            <div className="network-icon-large">🌐</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Network;
