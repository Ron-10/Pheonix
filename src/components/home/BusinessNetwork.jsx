import React from 'react';
import nepalMapImage from '../../assets/image.png';
import './Home.css';

const locations = [
    'Kathmandu', 'Surkhet', 'Mahendranagar', 'Dhangadhi', 'Guleriya',
    'Nepalgunj', 'Kohalpur', 'Bhairahawa', 'Biratnagar', 'Birgunj',
    'Birtamode', 'Butwal', 'Dang', 'Dharan', 'Pokhara', 'Narayanghat',
    'Taplejung', 'Dhankuta', 'Ilam', 'Lahan', 'Janakpur', 'Rajbiraj', 'Hetauda'
];

const BusinessNetwork = () => {
    return (
        <section className="network-section">
            <div className="container">
                <div className="network-content">
                    {/* Left side text */}
                    <div className="network-text">
                        <h2 className="section-title">Serving the Nation</h2>
                        <h3 className="network-subtitle">Nationwide Coverage</h3>
                        <p className="network-desc">
                            Over the past several years, we have proven ourselves as an industry innovator.
                            We have built an expanding and user-friendly business network spanning the nation,
                            ensuring our products and services reach every corner of Nepal.
                        </p>

                        <div className="locations-list">
                            {locations.map((loc) => (
                                <span key={loc} className="location-tag">
                                    {loc}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Static Map Image */}
                    <div className="network-map">
                        <div className="map-image-container">
                            <div className="map-header-row">
                                <span className="map-badge">Nationwide Network</span>
                                <span className="map-count">
                                    {locations.length}+ Key Business Locations
                                </span>
                            </div>

                            <div className="map-image-wrapper">
                                <img
                                    src={nepalMapImage}
                                    alt="Nepal Business Network Map"
                                    className="nepal-map-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessNetwork;