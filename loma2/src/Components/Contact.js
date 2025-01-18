import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>You deserve our respect at any time and in any place</p>

      <div className="contact-container">
        {/* Full-Width Form Section */}
        <div className="form-container">
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number (optional)" />
            <textarea placeholder="Write your message here..." required></textarea>
            <select required>
              <option value="" disabled selected>
                Select a Topic
              </option>
              <option value="general">General Inquiry</option>
              <option value="support">Customer Support</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          {/* Map Section */}
          <div className="map-container">
            <h3>Find Us Here</h3>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509737!2d144.95373531531592!3d-37.817209979751604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775e6789b7760!2s123%20Camera%20St!5e0!3m2!1sen!2s!4v1234567890"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
