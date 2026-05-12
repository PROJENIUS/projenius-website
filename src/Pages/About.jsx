import React from "react";
import Header from '../Components/Header';
import '../index.css';
import '../assets/css/About-page.css';
import TeamSection2 from "../Components/TeamSection2";
import TestimonialSection from "../Components/TestimonialSection";
import FooterTopSection from "../Components/FooterTopSection";


export default function About() {

  return (
    <>
      <div className="header-wrap">

        <Header />
        <div className="container title-section">
          <h1 className="page-title">About Us</h1>
        </div>
      </div>
      <section className="about-1 py-5 ">
        <div className="row">
          <div className="col-6">
            <div className="wrapper">
              <div className="container">

                <div className="circle circle-development">
                  <span>Development</span>
                </div>

                <div className="circle circle-webdesign">
                  <span>Web Design</span>
                </div>

                <div className="circle circle-mobileapps">
                  <span>Mobile Apps<br />Design</span>
                </div>

              </div>
            </div>
          </div>
          <div className="col-6">
            <span id="sub-heading">Who we are</span>
            <h2 className="section-title" id="title">Innovating Ideas Into Smart Solutions</h2>
            <p className="desc">Projenius is a technology-driven startup dedicated to building innovative solutions in software development, artificial intelligence, IoT, and product engineering. We work with businesses, startups, and students to create impactful digital products that solve real-world problems through creativity, technology, and innovation.</p>
            <div className="row">
              <div className="col-6">
                <ul className="icon-list">
                  <li className="list"><i class="bi bi-check-circle-fill"></i>Innovative Software & AI Solutions</li>
                  <li className="list"><i class="bi bi-check-circle-fill"></i>Training, Workshops & Mentorship</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="icon-list">
                  <li className="list"><i class="bi bi-check-circle-fill"></i>Smart IoT & Product Development</li>
                  <li className="list"><i class="bi bi-check-circle-fill"></i>Practical Technology for Real-World Impact</li>
                </ul>
              </div>
            </div>
            <a href="#" class="btn"><span class="btn-content">Contact Us</span></a>
          </div>
        </div>
      </section>
      <section className="about-2 container">
        <div className="box-content">
          <div className="row">
            <div className="col-4">
              <h2 className="counter-number">25k+</h2>
              <h6 className="counter-title">Project Completed</h6>
              <p className="counter-description">Completing a mobile application development</p>
            </div>
            <div className="col-4">
              <h2 className="counter-number">25k+</h2>
              <h6 className="counter-title">Project Completed</h6>
              <p className="counter-description">Completing a mobile application development</p>
            </div>
            <div className="col-4">
              <h2 className="counter-number">25k+</h2>
              <h6 className="counter-title">Project Completed</h6>
              <p className="counter-description">Completing a mobile application development</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-3 container py-5">
        <div className="row">
          <div className="col-6">
            <span id="sub-heading">Why Choose us?</span>
            <h2 className="section-title" id="title">Why Projenius Stands Out in Innovation</h2>
            <p className="section-desc">We combine innovation, technology, and practical expertise to deliver reliable solutions, quality services, and impactful learning experiences for everyone.</p>
            <img src="images/projenius-banner-2.webp" alt="" className="why-img" />
          </div>
          <div className="col-6 why-right">
            <div className="icon-box">
              <div className="row">
                <div className="col-2">
                  <div className="icon">
                    <i class="bi bi-lightbulb"></i>
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="icon-box-heading">Innovative Technology Solutions</h3>
                  <p className="icon-box-desc">We build smart and scalable solutions using AI, IoT, web, and mobile technologies for real-world applications.</p>
                </div>
              </div>
            </div>
            <div className="icon-box mt-3">
              <div className="row">
                <div className="col-2">
                  <div className="icon">
                    <i class="bi bi-people"></i>
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="icon-box-heading">Learning & Mentorship Support</h3>
                  <p className="icon-box-desc">We empower students through workshops, training programs, academic guidance, and hands-on technical learning experiences.</p>
                </div>
              </div>
            </div>
            <div className="icon-box mt-3">
              <div className="row">
                <div className="col-2">
                  <div className="icon">
                    <i class="bi bi-diagram-3"></i>
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="icon-box-heading">Industry-Focused Development</h3>
                  <p className="icon-box-desc">Our team develops practical digital products and hardware systems tailored for businesses, startups, and industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamSection2 /> 
      <section className="about-4 py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 img-area">
              <img src="images/magazine.png" alt="" className="img-mag" />
            </div>
            <div className="col-6 content-area">
              <h2 id="title">We Create With Purpose</h2>
              <p className="section-desc">A collective of designers, thinkers, and makers dedicated to crafting meaningful experiences, bringing ideas to life through creativity, innovation, and collaboration while shaping inspiring visual stories and memorable interactions that reflect our passion, vision, and journey through every page we create and share.</p>
              <a href="images/Shri-OS.pdf" class="btn"><span class="btn-content"><i class="bi bi-download me-3"></i>Download PDF</span></a>
            </div>
          </div>
        </div>
      </section>
     <section className="awards-section py-5">
  <div className="container">

    <div className="text-center mb-5">
      <span id="sub-heading">Achievements</span>
      <h2 className="section-title" id="title">Awards & Recognition</h2>

      <p className="section-desc awards-desc">
        Celebrating achievements, innovation, creativity, and milestones that showcase our passion for technology, design, and impactful digital solutions.
      </p>
    </div>

    <div className="awards-masonry">

      <div className="award-item">
        <img src="images/gallery-1.webp" alt="Award 1" />

        <div className="award-content">
          <h4 className="award-title">Honouring Excellence</h4>
          <p className="award-subtitle">
            Celebrating excellence, innovation, and success through achievements.
          </p>
        </div>
      </div>

      <div className="award-item">
        <img src="images/gallery-2.webp" alt="Award 2" />

        <div className="award-content">
          <h4 className="award-title">Achievement Recognition</h4>
          <p className="award-subtitle">
            Honoring talented students for achievements, excellence, and dedication.
          </p>
        </div>
      </div>

      <div className="award-item">
        <img src="images/gallery-3.webp" alt="Award 3" />

        <div className="award-content">
          <h4 className="award-title">Career Guidance Session</h4>
          <p className="award-subtitle">
            Industry experts sharing insights, innovation, and real-world knowledge.
          </p>
        </div>
      </div>

      <div className="award-item">
        <img src="images/gallery-4.webp" alt="Award 4" />

        <div className="award-content">
          <h4 className="award-title">Student Mentoring Program</h4>
          <p className="award-subtitle">
            Guiding students with mentorship, support, and career-focused learning.
          </p>
        </div>
      </div>

      <div className="award-item">
        <img src="images/gallery-5.webp" alt="Award 5" />

        <div className="award-content">
          <h4 className="award-title">SRM Hands-on Workshop</h4>
          <p className="award-subtitle">
            Providing practical technical training to build industry-ready skills.
          </p>
        </div>
      </div>

      <div className="award-item">
        <img src="images/gallery-6.webp" alt="Award 6" />

        <div className="award-content">
          <h4 className="award-title">Interactive Learning Session</h4>
          <p className="award-subtitle">
           Hands-on lab sessions designed to improve practical learning experience.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      <TestimonialSection />
      <FooterTopSection />
    </>

  );
}