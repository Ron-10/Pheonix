import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import './Partner.css';

const Partner = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        city: '',
        businessType: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your interest in partnering with us! We will review your application and get back to you soon.');
        setFormData({
            companyName: '',
            contactPerson: '',
            email: '',
            phone: '',
            city: '',
            businessType: '',
            message: ''
        });
    };

    return (
        <div className="partner-page">
            <PageHeader
                title="Partner With Us"
                subtitle="Join our nationwide network and grow your business with world-class technology products."
                bgClass="partner-header-bg"
            />

            <section className="partner-intro">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text-content">
                            <h2>Why Partner with Phoenix?</h2>
                            <p>
                                As a Phoenix Trading partner, you gain access to a portfolio of world-renowned brands
                                like ViewSonic, Philips, ESET, and Tenda. We believe in mutual growth and provide
                                our partners with the support they need to succeed in the competitive market.
                            </p>
                            <ul className="benefits-list">
                                <li>
                                    <span className="benefit-icon">🚀</span>
                                    <div>
                                        <strong>Exclusive Product Access</strong>
                                        <p>Get priority access to the latest products and exclusive deals.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="benefit-icon">📈</span>
                                    <div>
                                        <strong>Marketing Support</strong>
                                        <p>Receive marketing materials and support to boost your sales.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="benefit-icon">🛡️</span>
                                    <div>
                                        <strong>Technical Training</strong>
                                        <p>Regular training sessions for your team on new technologies.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="benefit-icon">🤝</span>
                                    <div>
                                        <strong>Dedicated Support</strong>
                                        <p>A dedicated account manager to assist with your business needs.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="intro-image-wrapper">
                            <div className="partner-stat-card">
                                <h3>500+</h3>
                                <p>Active Partners</p>
                            </div>
                            <div className="partner-stat-card">
                                <h3>75+</h3>
                                <p>Cities Covered</p>
                            </div>
                            <div className="partner-stat-card">
                                <h3>15+</h3>
                                <p>Years of Trust</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partner-form-section">
                <div className="container">
                    <div className="form-wrapper">
                        <div className="form-header">
                            <h2>Become a Partner</h2>
                            <p>Fill out the form below to start your journey with us.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="partner-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="companyName">Company Name *</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. Tech Solutions Pvt. Ltd."
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contactPerson">Contact Person *</label>
                                    <input
                                        type="text"
                                        id="contactPerson"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        required
                                        placeholder="Full Name"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="email@company.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+977 98XXXXXXXX"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="city">City/Location *</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. Kathmandu"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="businessType">Business Type</label>
                                    <select
                                        id="businessType"
                                        name="businessType"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Type</option>
                                        <option value="retailer">Retailer</option>
                                        <option value="wholesaler">Wholesaler</option>
                                        <option value="system_integrator">System Integrator</option>
                                        <option value="corporate_supplier">Corporate Supplier</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message / Company Profile</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us briefly about your business..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit Application</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partner;
