import React from "react";
import "../assets/css/ProjectSection.css";
import '../index.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ProjectSection() {

  const projects = [
    {
      title: "Helminth Egg Detection Poster",
      subtitle: "Medical Conference Poster",
      description:
        "Scientific poster on helminth egg detection in dog samples highlighting diagnosis and zoonotic risks worldwide. now!",
      rating: 5,
      image:
        "/images/project-image-1.webp",
    },
    {
      title: "AI-Powered Water Health Monitoring",
      subtitle: "Software",
      description:
        "Powerful marketing strategies designed to improve customer engagement, online visibility and long term business growth successfully.",
      rating: 4,
      image:
        "/images/project-image-2.webp",
    },
    {
      title: "Road Hazard Detection",
      subtitle: "Software",
      description:
        "AI-based accident detection system with instant emergency GPS alerts and real-time response tracking.",
      rating: 5,
      image:
        "/images/project-image-3.webp",
    },
    {
      title: "Smart Waste Management",
      subtitle: "Software",
      description:
        "Smart waste segregation system using sensors for automatic wet and dry waste classification.",
      rating: 4,
      image:
        "/images/project-image-4.webp",
    },
    {
      title: "Autonomous Follower Robot",
      subtitle: "Hardware",
      description:
        "Intelligent follower robot with obstacle avoidance for smart logistics and automated material transportation.",
      rating: 5,
      image:
        "/images/project-image-5.webp",
    },
  ];

  return (
    <section className="nv-work-showcase">

      <div className="nv-work-container">

        <div className="nv-work-header">
          <span className="nv-sub-heading" id="sub-heading">Our Projects</span>
          <h2 className="nv-title" id="title">Work Showcase</h2>
          <p>
            We create powerful digital experiences with modern design,
            innovative strategies and professional development solutions.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }}
        >

          {projects.map((item, index) => (

            <SwiperSlide key={index}>

              <div className="nv-work-card">

                <img src={item.image} alt={item.title} />

                <div className="nv-overlay"></div>

                <div className="nv-content">

                  <span className="nv-subtitle">
                    {item.subtitle}
                  </span>

                  <h3>{item.title}</h3>

                  <p className="nv-desc">
                    {item.description}
                  </p>

                  <div className="nv-rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}