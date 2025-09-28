import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          className="hamburger"
          style={{ marginRight: "20px", cursor: "pointer" }}
        >
          &#9776;
        </span>{" "}
        {/* Hamburger */}
        <span
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginRight: "20px",
          }}
        >
          Medium
        </span>
        <div
          className="search-desktop"
          style={{ position: "relative", marginRight: "20px" }}
        >
          <FaSearch
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#666",
            }}
          />
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "8px 8px 8px 35px",
              border: "1px solid #ccc",
              borderRadius: "20px",
              outline: "none",
              width: "200px",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          className="write-bell"
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <FaPenToSquare style={{ marginRight: "5px", cursor: "pointer" }} />
          <span style={{ marginRight: "20px", cursor: "pointer" }}>Write</span>
          <FaRegBell style={{ marginRight: "20px", cursor: "pointer" }} />
        </div>
        <div
          className="search-mobile"
          style={{ position: "relative", marginRight: "10px", display: "none" }}
        >
          <FaSearch
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#666",
            }}
          />
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "8px 8px 8px 35px",
              border: "1px solid #ccc",
              borderRadius: "20px",
              outline: "none",
              width: "150px",
            }}
          />
        </div>
        <span style={{ cursor: "pointer" }}>&#128100;</span> {/* Profile */}
      </div>
    </nav>
  );
};

export default Navbar;
