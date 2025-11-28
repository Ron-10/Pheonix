import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Rajesh Hamal",
        role: "CEO, TechWorld Nepal",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Phoenix Trading has been our most reliable partner for over a decade. Their commitment to genuine products and after-sales support is unmatched in Kathmandu."
    },
    {
        id: 2,
        name: "Sita Sharma",
        role: "Procurement Manager, Bank of Kathmandu",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "We rely on Phoenix for all our corporate IT infrastructure. The seamless delivery and warranty handling make them the best distributor in the country."
    },
    {
        id: 3,
        name: "Amit Pradhan",
        role: "Owner, Digital Store Pokhara",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        text: "Starting my retail business was hard, but Phoenix Trading supported me with great credit terms and marketing materials. They truly care about their partners."
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Trusted by the Best</h2>
                    <p className="section-subtitle">
                        Don't just take our word for it. Here's what our partners and clients have to say about working with us.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <div className="quote-icon">❝</div>
                            <p className="testimonial-text">{item.text}</p>
                            <div className="testimonial-author">
                                <img src={item.image} alt={item.name} className="author-img" />
                                <div className="author-info">
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
