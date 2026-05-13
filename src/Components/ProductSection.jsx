import React, { useState } from "react";
import "../assets/css/ProductSection.css";

const tabsData = [
  {
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "Modern responsive websites with premium UI and smooth performance.",
  },
  {
    title: "AI Solutions",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    description:
      "Smart AI-powered systems for automation and business growth.",
  },
  {
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
    description:
      "Creative marketing strategies to improve online visibility.",
  },
  {
    title: "Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description:
      "Track business performance using advanced analytics dashboards.",
  },
];

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="tabs-section">
      <div className="container">
        <div className="tabs-header">
          {tabsData.map((tab, index) => (
            <button
              key={index}
              className={activeTab === index ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="tabs-content">
          <div className="tabs-image">
            <img
              src={tabsData[activeTab].image}
              alt={tabsData[activeTab].title}
            />
          </div>

          <div className="tabs-text">
            <h2>{tabsData[activeTab].title}</h2>
            <p>{tabsData[activeTab].description}</p>

            <button className="explore-btn">Explore More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;