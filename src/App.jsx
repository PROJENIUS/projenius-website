import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Startup from './Pages/Startup';
import Blog from './Pages/Blog';
import Courses from "./Pages/Courses";
import Workshop from "./Pages/Workshop";
import CourseDetails from "./Pages/CourseDetails";

import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {

  return (

    <>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/coursedetails" element={<CourseDetails />} />

        <Route path="/workshop" element={<Workshop />} />

        <Route path="/startup" element={<Startup />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </>

  );

}