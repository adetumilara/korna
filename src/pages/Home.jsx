import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ForYouItem from "../components/ForYouItem";
import StaffPickItem from "../components/StaffPickItem";
import RecommendedTopics from "../components/RecommendedTopics";
import WhoToFollowItem from "../components/WhoToFollowItem";
import Footer from "../components/Footer";

const Home = () => {
  const [activeTab, setActiveTab] = useState("forYou");

  // Dummy data for For You
  const forYouData = [
    {
      author: "in Language Lab by Benben",
      title:
        "How Knowledge of Languages is More Valuable Than Ever on The Job Market",
      description: "It's not a skill issue, but a marketing issue.",
      time: "5d ago",
      likes: "1.2k",
      comments: "45",
      image: "https://picsum.photos/200/150?random=1",
      profileImage: "https://picsum.photos/40/40?random=12",
    },

    {
      author: "in Level Up Coding by Atta Vago ",
      title: "Welcome To Dream-Driven Development Where Nothing Works",
      description:
        "Half-baked diagrams, features that make no sense, Mikado architecture...",
      time: "4d ago",
      likes: "700",
      comments: "16",
      image: "https://picsum.photos/200/150?random=2",
      profileImage: "https://picsum.photos/40/40?random=13",
    },
    {
      author: "in Predict by iswarya writes",
      title:
        "Future-Proof Careers in the Age of AI: What You Should Learn in 2026",
      description:
        "What if I told you that by this time next year, you could land a job tht pays...",
      time: "Jul 30",
      likes: "3.7k",
      comments: "165",
      image: "https://picsum.photos/200/150?random=3",
      profileImage: "https://picsum.photos/40/40?random=14",
    },
    {
      author: "Clean Complier",
      title: "10 Java Collections Tricks Only Seniors Know",
      description:
        "If you've been coding in Java for a while, you probably use List, Set, and ...",
      time: "3d ago",
      likes: "52",
      comments: "5",
      image: "https://picsum.photos/200/150?random=4",
      profileImage: "https://picsum.photos/40/40?random=15",
    },
    {
      author: "in The Generator by Jim the AI Whisperer",
      title:
        "Want to see how insanley stupid AI really is? Ask ChatGPT to answer these riddles in just one word",
      description:
        "Limiting output length reveals AI isn't intelligent it's chatty!",
      time: "3d ago",
      likes: "2k",
      comments: "36",
      image: "https://picsum.photos/200/150?random=5",
      profileImage: "https://picsum.photos/40/40?random=16",
    },
  ];

  // Dummy data for Staff Picks
  const staffPicksData = [
    {
      author: "in The Medium Handbook by Zule @ Medium",
      title:
        "How This Brand Strategist Uses Medium to Explore Ideas, Repurpose Content, and Land Clients",
      time: "2d ago",
      image: "https://picsum.photos/100/80?random=6",
    },
    {
      author: "Jud Brewer MD PhD",
      title:
        "From 'I Have To' to 'I Get To': How One Word Change Rewires Your Brain",
      time: "5d ago",
      image: "https://picsum.photos/100/80?random=7",
    },
    {
      author: "Linh Nguyen",
      title: "Golden Design Lessons from Tokyo Metro",
      time: "Sep 3",
      image: "https://picsum.photos/100/80?random=8",
    },
  ];

  // Recommended Topics
  const recommendedTopics = [
    "Data Science",
    "React",
    "Coding",
    "Mental Health",
    "UX",
    "Python",
    "Productivity",
  ];

  // Who to Follow
  const whoToFollowData = [
    {
      name: "Dr. Derek Austin",
      title: "AI Content Engineer",
      image: "https://picsum.photos/50/50?random=9",
    },
    {
      name: "Sarah Johnson",
      title: "UX Designer",
      image: "https://picsum.photos/50/50?random=10",
    },
    {
      name: "Mike Chen",
      title: "Software Developer",
      image: "https://picsum.photos/50/50?random=11",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />

      {/* Main Section */}
      <div className="main-section">
        {/* Left Side */}
        <div>
          {/* Tabs */}
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <button
              onClick={() => setActiveTab("forYou")}
              style={{
                padding: "10px 20px",
                border: "none",
                borderBottom:
                  activeTab === "forYou"
                    ? "2px solid grey"
                    : "2px solid transparent",
                backgroundColor: "white",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              For You
            </button>
            <button
              onClick={() => setActiveTab("featured")}
              style={{
                padding: "10px 20px",
                border: "none",
                borderBottom:
                  activeTab === "featured"
                    ? "2px solid grey"
                    : "2px solid transparent",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              Featured
            </button>
          </div>

          {/* For You Content */}
          {activeTab === "forYou" && (
            <div>
              {forYouData.map((item, index) => (
                <ForYouItem key={index} item={item} />
              ))}
            </div>
          )}

          {/* Featured - Placeholder */}
          {activeTab === "featured" && (
            <div>
              <p>Featured content coming soon.</p>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div>
          {/* Staff Picks */}
          <h3>Staff Picks</h3>
          {staffPicksData.map((item, index) => (
            <StaffPickItem key={index} item={item} />
          ))}
          <p style={{ color: "#000", cursor: "pointer" }}>See the full list</p>

          <RecommendedTopics topics={recommendedTopics} />

          {/* Who to Follow */}
          <h3>Who to Follow</h3>
          {whoToFollowData.map((person, index) => (
            <WhoToFollowItem key={index} person={person} />
          ))}
          <p style={{ color: "#000", cursor: "pointer" }}>
            See more suggestions
          </p>

          {/* Reading List */}
          <h3>Reading List</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Click the save button on any story to easily add it to your reading
            list or custom list that you can share.
          </p>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
