import React from "react";
import "../assets/css/PriceTableSection.css";
import useEffect from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="pricing-main-section">
      <div className="container-fluid">
        <div className="row g-4">

          {/* LEFT IMAGE CARD */}
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="150">
            <div className="pricing-image-card">
              {/* <img
                src="images/about-main-image.png"
                alt="Pricing"
                className="img-fluid"
              /> */}

              <div className="pricing-overlay-content">
                <span id="sub-heading" className="text-white">Join With Us</span>

                <h1 id="title">
                  Amazing <br />
                  Pricing For <br />
                  Growth <br />
                  Business
                </h1>

                <div className="arrow-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </div>
              </div>
            </div>
          </div>

          {/* MONTHLY PACKAGE */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="package-card active-card">

              <div className="package-top">
                <div className="thunder-icon">
                  <i className="bi bi-lightning-charge-fill"></i>
                </div>

                <h3 className="card-title">Monthly Package</h3>
              </div>

              <p className="package-text">
                We denounce with righteous indignation dislike beguiled and
                demoralize
              </p>

              <ul className="package-list">
                <li><i className="bi bi-check-circle"></i> Landing Page Design</li>
                <li><i className="bi bi-check-circle"></i> Web Development</li>
                <li><i className="bi bi-check-circle"></i> SEO Optimizations</li>
                <li><i className="bi bi-check-circle"></i> Mobile Applications Design</li>
                <li><i className="bi bi-check-circle"></i> Quality Assurance</li>
                <li><i className="bi bi-check-circle"></i> Customs Services</li>
              </ul>

              <div className="price-box">
                <div>
                  <span className="dollar">$</span>
                  <span className="price">45.9</span>
                </div>

                <div className="save-box">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
                    alt=""
                  />
                  <span>Save 15%</span>
                </div>
              </div>

              <button className="btn" style={{width:'100%'}}>
                Choose Package <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* YEARLY PACKAGE */}
          <div className="col-lg-4" data-aos="fade-left" data-aos-delay="450">
            <div className="package-card">

              <div className="package-top">
                <div className="thunder-icon">
                  <i className="bi bi-lightning-charge-fill"></i>
                </div>

                <h3>Yearly Package</h3>
              </div>

              <p className="package-text">
                We denounce with righteous indignation dislike beguiled and
                demoralize
              </p>

              <ul className="package-list">
                <li><i className="bi bi-check-circle"></i> Landing Page Design</li>
                <li><i className="bi bi-check-circle"></i> Web Development</li>
                <li><i className="bi bi-check-circle"></i> SEO Optimizations</li>
                <li><i className="bi bi-check-circle"></i> Mobile Applications Design</li>
                <li><i className="bi bi-check-circle"></i> Quality Assurance</li>
                <li><i className="bi bi-check-circle"></i> Customs Services</li>
              </ul>

              <div className="price-box">
                <div>
                  <span className="dollar">$</span>
                  <span className="price">98.3</span>
                </div>

                <div className="save-box">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
                    alt=""
                  />
                  <span>Save 15%</span>
                </div>
              </div>

              <button className="btn outline-btn" style={{width:'100%', border:'2px solid #fff',}}>
                Choose Package <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;