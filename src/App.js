import React from "react";
import "./styles.css";
import { FaInstagram, FaMixcloud, FaCashRegister, FaGlobe, FaEnvelope, FaCode, FaYoutube, FaTiktok } from "react-icons/fa";
import BearLogo from "./ShuiOsoJLogo.png";

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
    </div>
  );
};

export default App;