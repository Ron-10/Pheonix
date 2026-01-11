import React, { useState, useEffect } from 'react';
import './Home.css';
import viewSonicLogo from '../../assets/ViewSonic Logo.png';
import tendaLogo from '../../assets/tenda logo.png';
import unitekLogo from '../../assets/Unitek logo.png';
import aiwaLogo from '../../assets/aiwa.png';
import esetLogo from '../../assets/eset.png';
import wanboLogo from '../../assets/Wanbo logo.png';
import byintekLogo from '../../assets/byintek.png';
import vevshaoLogo from '../../assets/vevshao.png';

const brandsData = [
    {
        id: 1,
        name: 'ViewSonic',
        logo: viewSonicLogo,
        slogan: 'See the difference.',
        description: 'A leading global provider of visual solutions, dedicated to connecting the world with advanced display technology.',
        products: [
            'Projectors', 'Monitors (2K, IPS)', 'Keyboards & Mice',
            'Signature Pads', 'Gaming Headsets', 'Webcams', 'Presentation Pointers'
        ]
    },
    {
        id: 2,
        name: 'ESET',
        logo: esetLogo,
        slogan: 'Digital Security. Progress. Protected.',
        description: 'An Advanced Security Solutions Provider based out of New Jersey, USA. Protecting your digital world.',
        products: [
            'NOD32 Antivirus', 'Internet Security', 'Mobile Security',
            'Server Security', 'Smart Security Premium', 'Small Business Security'
        ]
    },
    {
        id: 3,
        name: 'Tenda',
        logo: tendaLogo,
        slogan: 'Advanced Networking Solutions.',
        description: 'All for better networking. Providing affordable and easy-to-install networking solutions.',
        products: [
            'Wireless Routers', 'CCTV Cameras', 'NVR (Network Video Recorders)',
            'Wi-Fi Range Extenders', 'POE Switches'
        ]
    },
    {
        id: 4,
        name: 'Unitek',
        logo: unitekLogo,
        slogan: 'Human friendly.',
        description: 'Creating human-friendly products that are helpful and easy to use for everyone.',
        products: [
            'Hubs', 'GaN Chargers', 'Laptop Docking Stations',
            'Keyboard Hubs', 'HDMI Splitters', 'HDMI Cables'
        ]
    },
    {
        id: 5,
        name: 'Philips',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Philips_logo_new.svg',
        slogan: 'Solutions for Work & Play.',
        description: 'Renowned for quality and innovation in personal peripherals and audio.',
        products: [
            'Wired Mouse', 'Wired Keyboard', 'Wireless Mouse',
            'Wireless Keyboard', 'Gaming Mouse'
        ]
    },
    {
        id: 6,
        name: 'AIWA',
        logo: aiwaLogo,
        slogan: 'Japan est 1951.',
        description: 'Japanese engineering delivering superior display and audio experiences since 1951.',
        products: [
            '22” Monitor (100Hz)', '24” Monitor (100Hz, 144Hz, 165Hz)',
            '27” Monitor (100Hz, 120Hz)'
        ]
    },
    {
        id: 7,
        name: 'Wanbo',
        logo: wanboLogo,
        slogan: 'Cinema in your pocket.',
        description: 'Transform your cricket nights into a cinematic experience with Wanbo projectors. Designed to deliver crisp visuals and vibrant colors, Wanbo projectors ensure every boundary and wicket is displayed in stunning detail.',
        products: [
            'Smart Projectors', 'Portable Projectors', 'Home Cinema Systems',
            'Mini Projectors', 'Android TV Projectors'
        ]
    },
    {
        id: 8,
        name: 'Byintek',
        logo: byintekLogo,
        slogan: 'Big screen. Anywhere.',
        description: 'Byintek projectors deliver powerful brightness and sharp visuals for home cinema, business presentations, and outdoor entertainment. Built for reliability and performance, Byintek brings the theater experience wherever you go.',
        products: [
            'Smart Projectors',
            'Portable Projectors',
            'Home Cinema Projectors',
            'Business Projectors',
            'Android Projectors'
        ]
    },
    {
        id: 9,
        name: 'Vevshao',
        logo: vevshaoLogo,
        slogan: 'Smart vision. Simple living.',
        description: 'Vevshao focuses on compact, user-friendly projectors designed for everyday entertainment. With smart features, easy setup, and vibrant display quality, Vevshao makes big-screen viewing accessible for everyone.',
        products: [
            'Mini Projectors',
            'Smart LED Projectors',
            'Portable Projectors',
            'Home Entertainment Projectors',
            'Android TV Projectors'
        ]
    },

];

const BrandsGrid = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);

    useEffect(() => {
        if (selectedBrand) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedBrand]);

    const openModal = (brand) => {
        setSelectedBrand(brand);
    };

    const closeModal = () => {
        setSelectedBrand(null);
    };

    return (
        <section className="brands-section">
            <div className="container">
                <h2 className="section-title">Our Brands</h2>
                <p className="section-subtitle">Authorized Distributor for World-Class Technology Brands</p>

                <div className="brands-grid">
                    {brandsData.map((brand) => (
                        <div key={brand.id} className="brand-card" onClick={() => openModal(brand)}>
                            <div className="brand-logo-wrapper">
                                <img src={brand.logo} alt={`${brand.name} logo`} className="brand-logo-img" />
                            </div>
                            <div className="brand-overlay">
                                <span>View Details</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedBrand && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <div className="modal-header">
                            <h3>{selectedBrand.name}</h3>
                            <p className="brand-slogan">{selectedBrand.slogan}</p>
                        </div>
                        <div className="modal-body">
                            <p className="brand-desc">{selectedBrand.description}</p>
                            <h4>Key Products:</h4>
                            <ul className="product-list">
                                {selectedBrand.products.map((product, index) => (
                                    <li key={index}>{product}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BrandsGrid;
