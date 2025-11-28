import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

import logo from '../../assets/phoenix.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Phoenix Trading" className="logo-img" />
                </Link>

                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                        <li><Link to="/brands" className={`nav-link ${isActive('/brands')}`} onClick={() => setIsMenuOpen(false)}>Brands</Link></li>
                        <li><Link to="/corporate" className={`nav-link ${isActive('/corporate')}`} onClick={() => setIsMenuOpen(false)}>Corporate Solutions</Link></li>
                        <li><Link to="/network" className={`nav-link ${isActive('/network')}`} onClick={() => setIsMenuOpen(false)}>Business Network</Link></li>
                        <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                    <Link to="/contact" className="btn btn-primary cta-btn" onClick={() => setIsMenuOpen(false)}>
                        Partner With Us
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
