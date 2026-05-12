import React from "react";
import "../assets/css/ProductSection.css";

export default function ProductSection() {

    return (
        <section className="product-section">
            <div className="container">
                <div className="heading">
                <span id="sub-heading">Our Product</span>
                <h2 id="title">AI-Powered Smart Peanut Processing System</h2>
            </div>
            <div className="main">
                <div className="row">
                    <div className="col-6">
                       <img src="/images/product-img.png" alt="Smart Peanut Processing System" />
                    </div>
                    <div className="col-6">
                        <p className="section-desc">The AI-Powered Smart Peanut Processing System is an innovative hardware and software solution developed to improve the efficiency, quality, and automation of peanut processing. The system uses Artificial Intelligence and IoT technologies to monitor, analyze, and streamline the complete processing workflow from raw groundnut input to final peanut output</p>
                        <p className="section-desc">Designed for farmers, oil mills, and agro-based industries, the solution helps reduce manual effort, minimize wastage, and improve product quality through intelligent defect detection and real-time monitoring. By combining smart sensors, automation, and data-driven insights, the system aims to modernize traditional peanut processing methods with scalable and cost-effective technology.</p>
                    </div>
                </div>
            </div>
            </div>
            
        </section>


    );
}