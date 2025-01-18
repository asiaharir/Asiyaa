import React from "react";
import "./About.css";
import image9 from './assets/image22.jpg';  // Correct import statement

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            We are experts in digital marketing and product video production, committed to helping businesses grow and thrive in the digital world.
          </p>
          <p>
            Our mission is to deliver effective marketing strategies and high-quality video content that speaks directly to your audience. 
            From brand awareness to lead generation, we specialize in creating tailored digital marketing campaigns and product videos that capture attention and drive results.
          </p>
          <p>
            Whether you need engaging video content for social media or an all-encompassing marketing strategy to boost your online presence, we have the tools and expertise to bring your vision to life.
          </p>
          <p>
            With years of experience in the industry, our team combines creativity with technical expertise to create innovative solutions for our clients. We believe in the power of storytelling through video and the effectiveness of data-driven marketing strategies to maximize your brand’s potential.
          </p>
          <p>
            We are passionate about staying ahead of the latest trends, ensuring that we bring the most cutting-edge services to our clients. Together, we can make your brand stand out in the competitive digital landscape.
          </p>
        </div>
        <div className="about-image">
          <img src={image9} alt="Our Team" />  {/* Correct image source */}
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <i className="fas fa-eye" style={{ color: "#007bff", fontSize: "2rem" }}></i>
          <h3>Our Vision</h3>
          <p>Our vision is to be a leading provider of innovative digital solutions, empowering individuals and businesses to capture their world with precision and creativity.</p>
        </div>
        <div className="card">
          <i className="fas fa-bullseye" style={{ color: "#007bff", fontSize: "2rem" }}></i>
          <h3>Our Mission</h3>
          <p>Our mission is to offer exceptional digital marketing services and high-quality video production to help our clients stand out in the digital space and connect with their audience.</p>
        </div>
        <div className="card">
          <i className="fas fa-handshake" style={{ color: "#007bff", fontSize: "2rem" }}></i>
          <h3>Our Values</h3>
          <p>We believe in quality, integrity, and creativity. Our values guide us in providing services that not only meet but exceed our clients' expectations.</p>
        </div>
        <div className="card">
          <i className="fas fa-cogs" style={{ color: "#007bff", fontSize: "2rem" }}></i>
          <h3>Commitment to Quality</h3>
          <p>We are committed to delivering top-tier services and products, ensuring optimal results for our clients.</p>
        </div>
        <div className="card">
          <i className="fas fa-headset" style={{ color: "#007bff", fontSize: "2rem" }}></i>
          <h3>Customer Satisfaction</h3>
          <p>Our customers are at the heart of everything we do. We listen to their needs and ensure their satisfaction at every stage of the project.</p>
        </div>
        <div className="card">
          <i className="fas fa-lightbulb" style={{ color: "#007bff", fontSize: "2rem" }}></i>
          <h3>Innovation</h3>
          <p>We are constantly exploring new ways to innovate and push the boundaries of what's possible in digital marketing and video production.</p>
        </div>
      </div>

    </section>
  );
};

export default About;
