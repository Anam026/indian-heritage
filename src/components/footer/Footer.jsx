import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
      <div className="footer__content"></div>
      <div className="footer__team">
        <span>&spades;Adyan Tisekar </span>
        <span>&spades;Anam Khanzada </span>
        <span>&spades;Maithli Talegaonkar </span>
      </div>
    </footer>
  );
};

export default Footer;
