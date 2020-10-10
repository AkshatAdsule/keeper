import React from "react";

function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright Akshat Adsule {current_year}</p>
    </footer>
  );
}

export default Footer;
