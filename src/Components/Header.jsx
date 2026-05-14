import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../assets/css/Header.css";
import logo from "/images/projenius-logo.webp";

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, []);

    return (

        <header className={`main-header ${scrolled ? "scrolled" : ""}`}>

            <div className="container">

                {/* Top Bar */}
                <div className="top-bar d-flex justify-content-between align-items-center">

                    {/* <div className="contact">
                        <p>teamprojenius2025@gmail.com</p>
                        <p>+91 9876543210</p>
                    </div> */}

                    <div className="d-lg-none">☰</div>

                </div>

                {/* Navbar */}
                <nav className="navbar navbar-expand-lg custom-navbar mt-2">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="navbar-brand d-flex align-items-center text-white"
                    >
                        <img
                            src={logo}
                            alt="Projenius"
                            className="img-fluid"
                        />
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navMenu"
                        aria-controls="navMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>

                    {/* Menu */}
                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navMenu"
                    >

                        {/* Links */}
                        <ul className="navbar-nav mx-auto text-center">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/services"
                                    id="servicesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Services
                                </Link>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/courses">
                                            Courses
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/workshop">
                                            Workshop
                                        </Link>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/startup">
                                    Startup Supporter
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>

                        </ul>

                        {/* Right side */}
                        <div className="d-flex align-items-center gap-3 justify-content-center mt-3 mt-lg-0">

                            <Link to="/contact">
                                <button className="contact-btn">
                                    Enquiry Now ↗
                                </button>
                            </Link>

                        </div>

                    </div>

                </nav>

            </div>

        </header>
    );
}