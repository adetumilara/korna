import React from "react";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { MdMoreHoriz } from "react-icons/md";

const ForYouItem = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "30px",
        borderBottom: "1px solid #eee",
        paddingBottom: "20px",
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <img
            src={item.profileImage}
            alt="Author"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>{item.author}</p>
        </div>
        <h2 style={{ fontSize: "24px", margin: "10px 0" }}>{item.title}</h2>
        <p style={{ fontSize: "16px", color: "#666" }}>{item.description}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          <div style={{ display: "flex" }}>
            <span style={{ marginRight: "10px" }}>
              <FaRegStar />
            </span>
            <span style={{ marginRight: "10px" }}>{item.time}</span>
            <span style={{ marginRight: "10px" }}>&#10084; {item.likes}</span>
            <span style={{ marginRight: "10px" }}>
              &#128172; {item.comments}
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{ marginRight: "10px" }}>
              <AiOutlineMinusCircle />
            </span>
            <span style={{ marginRight: "10px" }}>
              <BsBookmarkPlus />
            </span>
            <span>
              <MdMoreHoriz />
            </span>
          </div>
        </div>
      </div>
      <div style={{ flex: "0 0 200px", marginLeft: "20px" }}>
        <img
          src={item.image}
          alt="Article"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default ForYouItem;
