import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import BrandsGrid from '../components/home/BrandsGrid';
import './Brands.css';

const Brands = () => {
    return (
        <div className="brands-page">
            <PageHeader
                title="Our Brands"
                subtitle="We represent world-class technology partners, bringing global innovation to the local market."
            />

            {/* Intro */}
            <section className="brands-intro container">
                <p>
                    Phoenix Trading is proud to be the authorized distributor for some of the world's leading technology brands.
                    Our partnerships allow us to offer high-quality, reliable, and innovative products to our customers.
                </p>
            </section>

            {/* Main Brands Grid (Reused) */}
            <div className="brands-wrapper">
                <BrandsGrid />
            </div>

            {/* Featured Partners */}
            <section className="featured-partners container">
                <h2 className="section-title">Featured Partners</h2>

                <div className="partner-showcase">
                    {/* ViewSonic */}
                    <div className="partner-card viewsonic">
                        <div className="partner-logo-area">
                            <h3>ViewSonic</h3>
                        </div>
                        <div className="partner-content">
                            <h4>Visual Solutions</h4>
                            <p>
                                A leading global provider of visual solutions, ViewSonic offers a comprehensive range of products
                                including monitors, projectors, and commercial displays.
                            </p>
                            <ul className="partner-products">
                                <li>Gaming & Professional Monitors</li>
                                <li>Interactive Flat Panels</li>
                                <li>Home Theater Projectors</li>
                            </ul>
                        </div>
                    </div>

                    {/* ESET */}
                    <div className="partner-card eset">
                        <div className="partner-logo-area">
                            <h3>ESET</h3>
                        </div>
                        <div className="partner-content">
                            <h4>Digital Security</h4>
                            <p>
                                ESET provides top-rated digital security solutions for businesses and consumers,
                                protecting millions of users worldwide from cyber threats.
                            </p>
                            <ul className="partner-products">
                                <li>Endpoint Protection</li>
                                <li>Internet Security</li>
                                <li>Data Encryption</li>
                            </ul>
                        </div>
                    </div>

                    {/* Tenda */}
                    <div className="partner-card tenda">
                        <div className="partner-logo-area">
                            <h3>Tenda</h3>
                        </div>
                        <div className="partner-content">
                            <h4>Networking Solutions</h4>
                            <p>
                                Tenda Technology provides affordable and easy-to-install networking solutions,
                                offering innovative products to realize smart life for every person.
                            </p>
                            <ul className="partner-products">
                                <li>Wireless Routers & Extenders</li>
                                <li>Switching & Broadband CPE</li>
                                <li>Smart Home Devices</li>
                            </ul>
                        </div>
                    </div>

                    {/* Unitek */}
                    <div className="partner-card unitek">
                        <div className="partner-logo-area">
                            <h3>Unitek</h3>
                        </div>
                        <div className="partner-content">
                            <h4>Connectivity & Accessories</h4>
                            <p>
                                Unitek creates human-friendly products that are helpful and easy to use,
                                specializing in computer and mobile accessories.
                            </p>
                            <ul className="partner-products">
                                <li>USB Hubs & Docking Stations</li>
                                <li>Cables & Adapters</li>
                                <li>Charging Solutions</li>
                            </ul>
                        </div>
                    </div>

                    {/* Philips */}
                    <div className="partner-card philips">
                        <div className="partner-logo-area">
                            <h3>Philips</h3>
                        </div>
                        <div className="partner-content">
                            <h4>Personal Peripherals</h4>
                            <p>
                                Philips accessories combine innovation and people-centric design to deliver
                                superior audio and control experiences for modern workspaces.
                            </p>
                            <ul className="partner-products">
                                <li>Keyboards & Mice</li>
                                <li>Audio & Video Accessories</li>
                                <li>Power Solutions</li>
                            </ul>
                        </div>
                    </div>

                    {/* AIWA */}
                    <div className="partner-card aiwa">
                        <div className="partner-logo-area">
                            <h3>AIWA</h3>
                        </div>
                        <div className="partner-content">
                            <h4>Display & Audio</h4>
                            <p>
                                With a heritage of Japanese engineering, AIWA delivers high-quality consumer electronics
                                that bring entertainment to life.
                            </p>
                            <ul className="partner-products">
                                <li>LED Monitors</li>
                                <li>Audio Systems</li>
                                <li>Consumer Electronics</li>
                            </ul>
                        </div>
                    </div>

                    {/* Wanbo */}
                    <div className="partner-card wanbo">
                        <div className="partner-logo-area">
                            <h3>Wanbo</h3>
                        </div>
                        <div className="partner-content">
                            <h4>Smart Projection</h4>
                            <p>
                                Wanbo specializes in smart projection technology, delivering cinematic experiences
                                in compact, portable, and stylish designs.
                            </p>
                            <ul className="partner-products">
                                <li>Smart Projectors</li>
                                <li>Portable Cinema</li>
                                <li>Home Entertainment</li>
                            </ul>
                        </div>
                    </div>
                    {/* Byintek */}
                    <div className="partner-card byintek">
                        <div className="partner-logo-area">
                            <h3>Byintek</h3>
                        </div>
                        <div className="partner-content">
                            <h4>Cinema Without Limits</h4>
                            <p>
                                Byintek redefines projection with ultra-bright visuals, immersive clarity,
                                and smart performance. From home theaters to outdoor movie nights,
                                Byintek turns any space into a true cinematic experience.
                            </p>
                            <ul className="partner-products">
                                <li>High-Brightness Smart Projectors</li>
                                <li>Portable Cinema Systems</li>
                                <li>Premium Home Theater Solutions</li>
                            </ul>
                        </div>
                    </div>
                    {/* Vevshao */}
                    <div className="partner-card vevshao">
                        <div className="partner-logo-area">
                            <h3>Vevshao</h3>
                        </div>
                        <div className="partner-content">
                            <h4>Compact Smart Viewing</h4>
                            <p>
                                Vevshao offers compact and user-friendly projectors designed for everyday
                                entertainment, combining smart features with simple, reliable performance.
                            </p>
                            <ul className="partner-products">
                                <li>Mini Projectors</li>
                                <li>Portable Projectors</li>
                                <li>Home Viewing Solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Brands;
