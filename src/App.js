import React from "react";
import emailjs from "emailjs-com";
import "./styles.css";
import { FaInstagram, FaMixcloud, FaCashRegister, FaGlobe, FaEnvelope, FaCode, FaYoutube, FaTiktok } from "react-icons/fa";
import BearLogo from "./ShuiOsoJLogo.png";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_98g590d", 
    "template_ivdjt0n", 
    e.target, 
    "mYD0XtrHqKMCCWhkE"
  ).then(
    () => {
      alert("Message sent successfully!");
    },
    (error) => {
      alert("Failed to send message. Please try again.");
      console.error("Email send error:", error.text);
    }
  );

  e.target.reset();
};
const links = [
  {
    name: "Official Shui Oso Website",
    url: "https://shuioso.netlify.app",
    icon: <FaGlobe />,
  },
  {
    name: "CashApp",
    url: "https://cash.app/$shangoshui",
    icon: <FaCashRegister />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Shui-Oso",
    icon: <FaYoutube />,
  },
  {
    name: "Mixcloud",
    url: "https://www.mixcloud.com/ShuiOso/",
    icon: <FaMixcloud />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shuiososound/",
    icon: <FaInstagram />,
  },
  {
    name: "Email",
    url: "mailto:shuinetworks@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "Coding Resume",
    url: "https://jeffbozier.netlify.app",
    icon: <FaCode />,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@shuioso",
    icon: <FaTiktok />,
  },
];

const App = () => {
  return (
    <div className="container">
    <img src={BearLogo} alt="Shui Oso Logo" className="logo" />
      <h1 className="title">Shui Oso</h1>
      <p className="subtitle">Tap in, explore, and vibe out.</p>
      <div className="link-list">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            <span className="icon">{link.icon}</span>
            {link.name}
          </a>
        ))}
      </div>
      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact</h2>
        <form onSubmit={sendEmail}>
  <div className="form-group">
    <input type="text" name="title" id="title" required placeholder=" " />
    <label htmlFor="title">Subject</label>
  </div>
  <div className="form-group">
    <input type="text" name="name" id="name" required placeholder=" " />
    <label htmlFor="name">Your Name</label>
  </div>
  <div className="form-group">
    <input type="email" name="email" id="email" required placeholder=" " />
    <label htmlFor="email">Your Email</label>
  </div>
  <div className="form-group">
    <textarea name="message" id="message" required placeholder=" "></textarea>
    <label htmlFor="message">Your Message</label>
  </div>
  <button type="submit">Send</button>
</form>
      </div>
    </div>
  );
};

export default App;
