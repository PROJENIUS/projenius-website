import React, { useEffect, useRef } from "react";
import '../assets/css/ServiceSection.css';
import '../index.css'

export default function ServicesSection() {

    const services = [
        {
            title: "Web Development",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "UI / UX Design",
            image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    const cardRefs = useRef([]);

    useEffect(() => {
        let el = cardRefs.current[0];
        while (el && el !== document.body) {
            el = el.parentElement;
            if (!el) break;
            const style = window.getComputedStyle(el);
            if (
                style.overflow === "hidden" ||
                style.overflow === "auto" ||
                style.overflowY === "hidden" ||
                style.overflowY === "auto" ||
                style.overflowX === "hidden"
            ) {
                el.style.overflow = "visible";
            }
        }
    }, []);

    return (
        <>
            <div className="svc-spacer-top" />

            <section className="svc-section">

                {/* LEFT */}
                <div className="svc-left">
                    <span className="svc-sub" id="sub-heading">Our Services</span>
                    <h2 className="svc-title" id="title">
                        Smart Solutions for Modern Digital Needs
                    </h2>
                    <p className="svc-para">
                        Innovative services in AI, IoT, web, mobile apps, design,
                        training, and smart product development solutions.
                    </p>
                    <a href="#" className="btn">
                                <span className="btn-content">Explore More Services</span>
                            </a>
                </div>

                {/* RIGHT */}
                <div className="svc-right">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`svc-card svc-card-${index + 1}`}
                            ref={(el) => (cardRefs.current[index] = el)}
                        >
                            <img src={service.image} alt={service.title} className="svc-img" />
                            <div className="svc-overlay" />
                            <div className="svc-content">
                                <h3 className="svc-card-title">{service.title}</h3>
                                <a href="/" className="svc-read-more">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    );
}