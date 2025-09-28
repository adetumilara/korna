import React from "react";

const WhoToFollowItem = ({ person }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
    >
      <img
        src={person.image}
        alt="Profile"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
      />
      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: "bold", margin: 0 }}>{person.name}</p>
        <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
          {person.title}
        </p>
      </div>
      <button
        style={{
          padding: "5px 15px",
          border: "1px solid #ccc",
          backgroundColor: "white",
          color: "#666",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Follow
      </button>
    </div>
  );
};

export default WhoToFollowItem;
