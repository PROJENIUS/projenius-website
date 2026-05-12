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
      title: "Brand Identity",
      subtitle: "Creative Business Solution",
      description:
        "We build strong digital branding solutions with modern creativity, strategy and innovative user focused business experiences.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Marketing Strategy",
      subtitle: "Digital Growth Planning",
      description:
        "Powerful marketing strategies designed to improve customer engagement, online visibility and long term business growth successfully.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Corporate Meeting",
      subtitle: "Professional Consulting",
      description:
        "Professional consulting services helping companies improve communication, teamwork and effective decision making through smart planning.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Creative Team",
      subtitle: "Business Collaboration",
      description:
        "Creative collaboration between talented professionals delivering innovative solutions for startups and enterprises.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Office Interior",
      subtitle: "Modern Workspace Design",
      description:
        "Modern office interiors crafted with premium aesthetics and productivity focused collaborative working environments.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
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