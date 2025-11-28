import React from 'react';
import './PageHeader.css';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
    return (
        <div className="page-header-wrapper" style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}>
            <div className="page-header-overlay"></div>
            <div className="container page-header-content">
                <h1 className="animate-fade-in">{title}</h1>
                <p className="animate-fade-in-delay">{subtitle}</p>
            </div>
            <div className="header-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </div>
    );
};

export default PageHeader;
