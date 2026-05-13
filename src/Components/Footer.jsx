import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
import "../assets/css/Floating.css";
import ChatBot from "./ChatBot";

const Arrow = () => (
    <span className="footer-arrow">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <polyline
                points="1,2 5,4 1,6"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </span>
);

export default function Footer() {

    const [showPopup, setShowPopup] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        return () => clearTimeout(timer);

    }, []);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 200) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    return (

        <>

            <footer className="main-footer">

                {/* TOP BAR */}

                <div className="footer-topbar">

                    <div className="footer-call">

                        <div className="footer-call-icon">
                            📞
                        </div>

                        <div>

                            <div className="footer-small-title">
                                Give us a call
                            </div>

                            <div className="footer-phone">
                                +91 90254 76322
                            </div>

                        </div>

                    </div>

                    <div className="footer-newsletter">

                        <div>

                            <div className="footer-news-text-light">
                                Join
                            </div>

                            <div className="footer-news-text-bold">
                                Newsletter
                            </div>

                        </div>

                        <div className="footer-news-box">

                            <input
                                type="email"
                                placeholder="Your email"
                                className="footer-input"
                            />

                            <button className="footer-submit-btn">
                                SUBMIT
                            </button>

                        </div>

                    </div>

                </div>

                {/* MAIN FOOTER */}

                <div className="footer-main-grid">

                    {/* BRAND */}

                    <div>

                        <div className="footer-logo-wrap">

                            <img
                                src="images/projenius-logo.webp"
                                alt="ProJenius"
                                className="footer-logo"
                            />

                        </div>

                        <p className="footer-description">
                            Improve efficiency, provide a better Customer experience with modern Technology services available.
                        </p>

                        <div className="footer-socials">

                            <a
                                href="https://wa.me/919025476322?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
                                target="_blank"
                                rel="noreferrer"
                                className="footer-social whatsapp"
                            >
                                <i className="bi bi-whatsapp"></i>
                            </a>

                            <a
                                href="https://instagram.com/projenius_"
                                target="_blank"
                                rel="noreferrer"
                                className="footer-social instagram"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>

                            <a
                                href="https://www.facebook.com/profile.php?id=61560720950335&sk=followers"
                                target="_blank"
                                rel="noreferrer"
                                className="footer-social facebook"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/projenius-498444374/"
                                target="_blank"
                                rel="noreferrer"
                                className="footer-social linkedin"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>

                        </div>

                    </div>

                    {/* QUICK LINKS */}

                    <div>

                        <h4 className="footer-column-title">
                            Quick Links
                        </h4>

                        <ul className="footer-links">

                            <li>
                                <Link to="/" className="footer-link">
                                    <Arrow />
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="footer-link">
                                    <Arrow />
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="/courses" className="footer-link">
                                    <Arrow />
                                    Courses
                                </Link>
                            </li>

                            <li>
                                <Link to="/workshop" className="footer-link">
                                    <Arrow />
                                    Workshop
                                </Link>
                            </li>

                            <li>
                                <Link to="/startup-supporter" className="footer-link">
                                    <Arrow />
                                    Startup Supporter
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="footer-link">
                                    <Arrow />
                                    Contact
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* CONTACT */}

                    <div>

                        <h4 className="footer-column-title">
                            Contact
                        </h4>

                        <div className="footer-contact-wrap">

                            <div className="footer-contact-item">

                                <div className="footer-contact-icon">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </div>

                                <div>
                                    PLOT NO 3, Erikarai St, Velmurugan Nagar, Namachivaya Nagar, Madurai, Tamil Nadu 625003
                                </div>

                            </div>

                            <div className="footer-contact-item">

                                <div className="footer-contact-icon">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>

                                <div>
                                    teamprojenius2025@gmail.com
                                </div>

                            </div>

                            <div className="footer-contact-item">

                                <div className="footer-contact-icon">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>

                                <div>
                                    +91 90254 76322
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* GOOGLE MAP */}

                    <div>

                        <h4 className="footer-column-title">
                            Find Us
                        </h4>

                        <div className="footer-map">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2433611788306!2d78.08760837503!3d9.91367849018737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfb5c8f13bb3%3A0xc245f4db34baf398!2sProJenius%20Innovation%20Technology%20Private%20Limited!5e0!3m2!1sen!2sin!4v1778601496079!5m2!1sen!2sin"
                                width="100%"
                                height="220"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>

                        </div>

                    </div>

                </div>

                {/* COPYRIGHT */}

                <div className="footer-bottom">

                    <div className="footer-copy">
                        © Copyright 2026 ProJenius. All rights reserved.
                    </div>

                    <div className="footer-bottom-links">

                        <Link to="/privacy-policy">
                            Privacy Policy
                        </Link>

                        <Link to="/terms-conditions">
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </footer>

            {/* SCROLL BUTTON */}

            <button
                className={`scroll-top-btn ${showScroll ? "show-scroll" : ""}`}
                onClick={scrollToTop}
            >
                <i className="bi bi-arrow-up"></i>
            </button>

            {/* POPUP */}

            {showPopup && (

                <div className="custom-popup-overlay">

                    <div className="custom-popup-box">

                        <button
                            className="custom-popup-close"
                            onClick={() => setShowPopup(false)}
                        >
                            ×
                        </button>

                        <img
                            src="images/product-img.png"
                            alt="Popup Banner"
                        />

                    </div>

                </div>

            )}

            <ChatBot />

        </>

    );

}