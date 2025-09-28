import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "40px",
        borderTop: "1px solid #ccc",
        paddingTop: "20px",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {[
          "Help",
          "Status",
          "About",
          "Careers",
          "Press",
          "Blog",
          "Privacy",
          "Rules",
          "Terms",
          "Text to Speech",
        ].map((link, index) => (
          <a
            key={index}
            href="#"
            style={{
              margin: "5px 10px 5px 0",
              color: "#000",
              textDecoration: "none",
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
