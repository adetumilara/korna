import React from "react";

const StaffPickItem = ({ item }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
        <img
          src={item.image}
          alt="Staff Pick"
          style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }}
        />
        <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>{item.author}</p>
      </div>
      <h4 style={{ fontSize: "14px", fontWeight: "bold", margin: "5px 0" }}>
        {item.title}
      </h4>
      <p style={{ fontSize: "12px", color: "#666" }}>{item.time}</p>
    </div>
  );
};

export default StaffPickItem;
