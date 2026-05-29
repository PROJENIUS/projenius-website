import React from "react";
import '../assets/css/TrainingSection.css';
import '../index.css';

export default function TraningSection(){
    return(
        <section className="training-section py-5">
            <div className="container">
                <div className="heading text-center">
                    <span id="sub-heading">Our Traning Program</span>
                    <h2 className="train-section-title" id="title">Industry-Focused Training & Workshops</h2>
                </div>
                <div className="main mt-5">
    <div className="row g-4">

        {/* Left Column */}
        <div className="col-lg-6">

            <div className="training-card big-card">
                <img src="/images/iot-workshop.png" alt="" />

                <div className="training-content">
                    <span>Future Ready</span>
                    <h4>Career Guidance</h4>
                </div>
            </div>

            <div className="training-card small-card mt-4">
                <img src="/images/software-developement-training.png" alt="" />

                <div className="training-content">
                    <span>Skill Growth</span>
                    <h4>Mentoring Program</h4>
                </div>
            </div>

        </div>

        {/* Right Column */}
        <div className="col-lg-6 right-column">

            <div className="training-card small-card">
                <img src="/images/software-developement-training.png" alt="" />

                <div className="training-content">
                    <span>Smart Innovation</span>
                    <h4>IoT Workshop</h4>
                </div>
            </div>

            <div className="training-card big-card mt-4">
                <img src="/images/iot-workshop.png" alt="" />

                <div className="training-content">
                    <span>Coding Skills</span>
                    <h4>Programming Workshop</h4>
                </div>
            </div>

        </div>

    </div>
</div>
        
            </div>
            
        </section>
    );
}