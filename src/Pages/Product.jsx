import React from "react";
import Header from '../Components/Header';
import '../index.css';
import '../assets/css/Product-page.css';
export default function Product() {
  return (
    <section className="header-wrap"style={{backgroundImage:'linear-gradient(#1219297d), url(/images/projenius-banner.webp)'}}>
      <Header/>
      <div className="container title-section">
        <h1 className="page-title">Our Product</h1>
      </div>
      
    </section>
  );
}