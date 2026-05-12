import React from "react";
import Header from '../Components/Header';
import PriceTable from '../Components/PriceTableSection'
import '../index.css';
import '../assets/css/Service-page.css';
import iot from './iot-course';


export default function Workshop() {
  return (
    <>
      <section className="header-wrap">
        <Header />
        <div className="container title-section">
          <h1 className="page-title">Workshop</h1>
        </div>

      </section>
      <section className="workshop-1 py-5">
        <div className="section odd">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src="images/projenius-banner-2.webp" alt="" className="img-workshop-1" />
              </div>
              <div className="col-6">
                <span id="sub-heading">Flagship</span>
                <h3 id="title">Building the Future, One Project at a Time</h3>
                <p className="section-desc">Students actively engage in interactive live demonstrations and practical hands-on project development that help them understand real-world concepts through experience-based learning. These sessions encourage creativity, innovation, and technical growth while allowing students to apply theoretical knowledge to meaningful projects. Through continuous participation in activities, workshops, and live problem-solving exercises, students build confidence, improve analytical thinking, and strengthen their ability to adapt to modern technologies and industry practices in an engaging and supportive learning environment.</p>

              </div>
            </div>
          </div>
        </div>

        <div className="even section">
          <div className="container">
            <div className="row mt-5">

              <div className="col-6">
                <span id="sub-heading">Career Planning</span>
                <h3 id="title">Shaping Careers with Clarity & Confidence</h3>
                <p className="section-desc">Students received valuable expert guidance on career development, emerging technologies, and current industry expectations through interactive sessions and mentoring activities. Industry professionals shared practical insights, real-world experiences, and future career opportunities that helped students understand professional requirements and workplace trends. These sessions improved students’ confidence, technical awareness, communication skills, and decision-making abilities while preparing them to adapt successfully to evolving technologies, competitive environments, and future career challenges in various industries.</p>

              </div>
              <div className="col-6">
                <img src="images/projenius-banner-2.webp" alt="" className="img-workshop-1" />
              </div>
            </div>
          </div>

        </div>

        <div className="section odd">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src="images/projenius-banner-2.webp" alt="" className="img-workshop-1" />
              </div>
              <div className="col-6">
                <span id="sub-heading"> Skill Growth</span>
                <h3 id="title">Personalized Guidance for Long-Term Growth</h3>
                <p className="section-desc">One-on-one mentoring provided students with personalized guidance and continuous support throughout their learning journey, helping them strengthen leadership qualities, improve technical expertise, and build strong professional confidence. Through direct interaction with experienced mentors and industry professionals, students gained valuable insights, practical knowledge, and motivation to overcome challenges effectively. This mentoring approach encouraged independent thinking, better communication, problem-solving abilities, teamwork, and career readiness, preparing students for future academic and professional success in a competitive environment.</p>

              </div>
            </div>
          </div>
        </div>

        <div className="section even">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <span id="sub-heading">Recognition</span>
                <h3 id="title">Celebrating Talent & Achievement</h3>
                <p className="section-desc">Outstanding performers and teams were recognized for their innovation, dedication, creativity, and commitment to excellence throughout the event. Their consistent hard work, technical skills, teamwork, and ability to deliver impactful ideas inspired everyone present and highlighted the importance of collaboration and determination in achieving success. Special appreciation was given to participants who demonstrated leadership, problem-solving abilities, and outstanding project execution while maintaining professionalism, enthusiasm, and a strong passion for learning and continuous improvement. across all events.</p>

              </div>
              <div className="col-6">
                <img src="images/projenius-banner-2.webp" alt="" className="img-workshop-1" />
              </div>

            </div>
          </div>
        </div>
      </section>


    </>

  );
}