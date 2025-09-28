import React from "react";

const RecommendedTopics = ({ topics }) => {
  return (
    <div>
      <h3>Recommended Topics</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {topics.map((topic, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f0f0f0",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h4 style={{ fontSize: "16px", margin: 0 }}>{topic}</h4>
          </div>
        ))}
      </div>
      <p style={{ color: "#000", cursor: "pointer", marginTop: "10px" }}>
        See more topics
      </p>
    </div>
  );
};

export default RecommendedTopics;
