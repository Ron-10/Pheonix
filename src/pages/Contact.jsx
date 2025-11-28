import React, { useRef, useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // NOTE: Replace these with your actual EmailJS credentials
        // You can get these from https://dashboard.emailjs.com/
        const SERVICE_ID = 'service_qvwsiiz';
        const TEMPLATE_ID = 'template_fvaoerk';
        const PUBLIC_KEY = 'lFSDm9p1V1VMsu32x';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                setSubmitStatus('success');
                e.target.reset();
                setIsSubmitting(false);
                // Clear success message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            }, (error) => {
                setSubmitStatus('error');
                console.error(error.text);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact-page">
            <PageHeader
                title="Contact Us"
                subtitle="We'd love to hear from you. Get in touch with us for inquiries, support, or just to say hello."
            />

            <div className="container contact-container">
                {/* Contact Info Cards */}
                <div className="contact-info">
                    <div className="info-card">
                        <div className="info-icon">📍</div>
                        <h3>Visit Us</h3>
                        <p>Newroad, Kathmandu, Nepal</p>
                        <span className="info-sub">Head Office</span>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">📞</div>
                        <h3>Call Us</h3>
                        <p>+977-1-5364545</p>
                        <span className="info-sub">Mon-Fri, 9am-6pm</span>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">✉️</div>
                        <h3>Email Us</h3>
                        <p>info@phoenixtrading.com.np</p>
                        <span className="info-sub">24/7 Support</span>
                    </div>
                </div>

                <div className="contact-content">
                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <div className="form-header">
                            <h2>Send us a Message</h2>
                            <p>Have a question? Fill out the form below and we'll get back to you shortly.</p>
                        </div>
                        <form className="contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="user_name" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="user_email" placeholder="john@example.com" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="form-status success">
                                    <span className="status-icon">✅</span>
                                    <p>Thank you! Your message has been sent successfully.</p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="form-status error">
                                    <span className="status-icon">⚠️</span>
                                    <p>Something went wrong. Please try again or email us directly.</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Warranty & Support */}
                    <div className="warranty-section">
                        <div className="warranty-card">
                            <div className="warranty-icon">🛡️</div>
                            <h2>Customer Care & Warranty</h2>
                            <p>
                                We believe in taking care of our customers even after the sale.
                                We make it simple with our customer-focused warranty management and smooth claim processing.
                            </p>
                            <div className="quote-box">
                                "Our goal is to provide security and ensure product warranty, making it easy for our customers to trust and rely on us."
                            </div>
                            <ul className="warranty-features">
                                <li>Authorized Service Center</li>
                                <li>Genuine Spare Parts</li>
                                <li>Quick Turnaround Time</li>
                                <li>Technical Support</li>
                            </ul>
                            <button className="btn btn-outline-primary full-width">Check Warranty Status</button>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="faq-section">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>Do you offer delivery outside Kathmandu?</h4>
                            <p>Yes, we have a nationwide network and can arrange delivery to most major cities in Nepal.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What is the warranty period for laptops?</h4>
                            <p>Most laptops come with a standard 1-year warranty, but it varies by brand and model. Please check the specific product details.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you provide on-site support for corporate clients?</h4>
                            <p>Absolutely. We offer comprehensive on-site support and maintenance contracts for our corporate partners.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
