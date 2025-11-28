import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Layout.css';

import logo from '../../assets/phoenix.png';

const Footer = () => {
    const form = useRef();
    const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading' | null

    const sendNewsletter = (e) => {
        e.preventDefault();
        setStatus('loading');

        // NOTE: Replace these with your actual EmailJS credentials
        const SERVICE_ID = 'service_qvwsiiz';
        const TEMPLATE_ID = 'template_tmly8e7';
        const PUBLIC_KEY = 'lFSDm9p1V1VMsu32x';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                setStatus('error');
                console.error(error.text);
                setTimeout(() => setStatus(null), 5000);
            });
    };
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section company-info">
                    <Link to="/" className="footer-logo-link">
                        <img src={logo} alt="Phoenix Trading" className="footer-logo-img" />
                    </Link>
                    <p>Every Great Business Is Built On Friendship.</p>
                    <p>Authorized Distributor of ViewSonic, ESET, Tenda, and Philips in Nepal.</p>

                    <div className="social-icons">
                        <a href="#" className="social-icon" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="social-icon" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="social-icon" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/brands">Our Brands</Link></li>
                        <li><Link to="/corporate">Corporate Solutions</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <p>Newroad, Kathmandu, Nepal</p>
                    <p>Phone: +977-1-5364545</p>
                    <p>Email: info@phoenixtrading.com.np</p>
                </div>

                <div className="footer-section newsletter">
                    <h4>Stay Updated</h4>
                    <p>Subscribe to our newsletter for the latest updates and offers.</p>
                    <form className="newsletter-form" ref={form} onSubmit={sendNewsletter}>
                        <input type="email" name="user_email" placeholder="Your email address" required disabled={status === 'loading'} />
                        <button type="submit" aria-label="Subscribe" disabled={status === 'loading'}>
                            {status === 'loading' ? (
                                <span className="spinner-small"></span>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            )}
                        </button>
                    </form>
                    {status === 'success' && <p className="newsletter-msg success">Thanks for subscribing!</p>}
                    {status === 'error' && <p className="newsletter-msg error">Subscription failed. Try again.</p>}
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Phoenix Trading. All rights reserved.</p>
                <div className="footer-legal">
                    <Link to="/privacy">Privacy Policy</Link>
                    <span className="separator">•</span>
                    <Link to="/terms">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
