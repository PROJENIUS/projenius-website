import React from "react";
import "../index.css";
import '../assets/css/ContactSection.css'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
    once: true,
    offset: 80,
    easing: "ease-in-out",
    });
  }, []);
    return (
        <section className="contact-section">

            {/* TOP DARK SECTION */}
            <div className="section-1">
                <div className="container">

                    <div className="heading">
                        <span id="sub-heading" data-aos="fade-up" data-aos-delay="150">
                            Let’s get Started
                        </span>

                        <h2
                            id="title"
                            className="contact-section-title"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Want to work Together
                        </h2>
                    </div>

                </div>
            </div>

            {/* IMAGE CARD SECTION */}
            <div className="section-2">

                <div className="container">

                    <div className="contact-card">
                        <div className="image-slider">

                            <img
                                src="/images/bg.png"
                                alt=""
                                className="contact-img"
                            />

                            <img
                                src="/images/bg2.png"
                                alt=""
                                className="contact-img"
                            />

                        </div>

                        <div className="overlay"></div>

                        <div className="card-content">

                            <h3 data-aos="fade-right" data-aos-delay="150">
                                Build A Creative <br />
                                Showcase Website.
                            </h3>

                            <Link href="/contact" className="btn" data-aos="fade-left" data-aos-delay="300">
                                <span className="btn-content">
                                    Let's Talk
                                </span>
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

            {/* COUNTER SECTION */}
            <div className="counter-section">

                <div className="container">

                    <div className="counter-wrapper">

                        <div className="counter-box">
                            <h2>156k</h2>
                            <p>PROJECT COMPLETE</p>
                        </div>

                        <div className="counter-box">
                            <h2>556k</h2>
                            <p>CLIENTS SATISFACTIONS</p>
                        </div>

                        <div className="counter-box">
                            <h2>234k</h2>
                            <p>ENVATO MARKET</p>
                        </div>

                        <div className="counter-box">
                            <h2>348k</h2>
                            <p>MOBILE APPS</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}