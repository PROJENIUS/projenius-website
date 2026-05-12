import React from "react";
import '../assets/css/TestimonialSection.css';
import '../index.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const testimonialData = [
    {
        id: 1,
        name: "Eleanor Pena",
        role: "Senior Director",
        profile:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
        review:
            "Turn your ideas into reality with our exceptional software design and development team. Join the growing list of clients who have leveraged our expertise to scale their businesses."
    },

    {
        id: 2,
        name: "Jacob Jones",
        role: "UI/UX Designer",
        profile:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400",
        review:
            "Their innovative solutions helped us improve business growth and customer engagement. The team delivered exactly what we envisioned with excellent communication."
    },

    {
        id: 3,
        name: "Leslie Alexander",
        role: "Marketing Head",
        profile:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
        review:
            "Working with this company was a great experience. Their creative process and technical expertise transformed our ideas into a scalable platform."
    }
];

export default function TestimonialSection() {

    return (

        <section className="testimonial-section">

            <div className="container">

                <div className="testimonial-wrapper">

                    {/* LEFT CONTENT */}

                    <div className="testimonial-left">

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            slidesPerView={1}
                            loop={true}
                            speed={1200}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: '.testimonial-next',
                                prevEl: '.testimonial-prev',
                            }}
                        >

                            {
                                testimonialData.map((item) => (

                                    <SwiperSlide key={item.id}>

                                        <div className="testimonial-content">

                                            <div className="google-review">

                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                                    alt=""
                                                />

                                                <div className="stars">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                </div>

                                            </div>

                                            <p className="testimonial-text">
                                                “{item.review}”
                                            </p>

                                            <div className="testimonial-line"></div>

                                            <div className="client-info">

                                                <div className="client-image">
                                                    <img src={item.profile} alt="" />
                                                </div>

                                                <div className="client-details">
                                                    <h4>{item.name}</h4>
                                                    <span>{item.role}</span>
                                                </div>

                                            </div>

                                        </div>

                                    </SwiperSlide>

                                ))
                            }

                        </Swiper>

                        {/* NAVIGATION */}

                        <div className="testimonial-navigation">

                            <button className="testimonial-prev">
                                <i className="bi bi-chevron-left"></i>
                            </button>

                            <button className="testimonial-next">
                                <i className="bi bi-chevron-right"></i>
                            </button>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}

                    <div className="testimonial-right">

                        <div className="quote-icon">
                            <i className="bi bi-quote"></i>
                        </div>

                        <img
                            src="https://pngimg.com/uploads/businessman/businessman_PNG6564.png"
                            alt=""
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}