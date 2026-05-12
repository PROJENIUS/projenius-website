import React from "react";
import Header from '../Components/Header';
import '../index.css';
import '../assets/css/Service-page.css';
import PriceTable from '../Components/PriceTableSection'


export default function Services() {
  return (
    <>
    <section className="header-wrap">
      <Header/>
      <div className="container title-section">
        <h1 className="page-title">Services</h1>
      </div>
      
    </section>
    <section className="service-1 container">
      <div className="row">
        <div className="col-3">
          <div className="box">
            <div className="icon-circle">
                <i class="bi bi-code-slash icon"></i>
            </div>
            <h4 className="box-title text-center">Web Development</h4>
            <p className="box-desc text-center">Crafting responsive, high-performance websites and web applications tailored to your business needs.</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box">
            <div className="icon-circle even">
                <i class="bi bi-code-slash icon"></i>
            </div>
            <h4 className="box-title text-center">Web Development</h4>
            <p className="box-desc text-center">Crafting responsive, high-performance websites and web applications tailored to your business needs.</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box">
            <div className="icon-circle">
                <i class="bi bi-code-slash icon"></i>
            </div>
            <h4 className="box-title text-center">Web Development</h4>
            <p className="box-desc text-center">Crafting responsive, high-performance websites and web applications tailored to your business needs.</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box">
            <div className="icon-circle even">
                <i class="bi bi-code-slash icon"></i>
            </div>
            <h4 className="box-title text-center">Web Development</h4>
            <p className="box-desc text-center">Crafting responsive, high-performance websites and web applications tailored to your business needs.</p>
          </div>
        </div>
      </div>
      <div className="row r2">
        <div className="col-3">
          <div className="box">
            <div className="icon-circle">
                <i class="bi bi-code-slash icon"></i>
            </div>
            <h4 className="box-title text-center">Web Development</h4>
            <p className="box-desc text-center">Crafting responsive, high-performance websites and web applications tailored to your business needs.</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box">
            <div className="icon-circle even">
                <i class="bi bi-code-slash icon"></i>
            </div>
            <h4 className="box-title text-center">Web Development</h4>
            <p className="box-desc text-center">Crafting responsive, high-performance websites and web applications tailored to your business needs.</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box">
            <div className="icon-circle">
                <i class="bi bi-code-slash icon"></i>
            </div>
            <h4 className="box-title text-center">Web Development</h4>
            <p className="box-desc text-center">Crafting responsive, high-performance websites and web applications tailored to your business needs.</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box">
            <div className="icon-circle even">
                <i class="bi bi-code-slash icon"></i>
            </div>
            <h4 className="box-title text-center">Web Development</h4>
            <p className="box-desc text-center">Crafting responsive, high-performance websites and web applications tailored to your business needs.</p>
          </div>
        </div>
      </div>
    </section>
    <PriceTable />
    
    </>
    
  );
}