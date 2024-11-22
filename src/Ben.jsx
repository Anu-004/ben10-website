import React from "react";
import { motion } from "framer-motion";

const Ben = () => {
  const totalDuration = 8; // Total duration for both animations (scroll + xlr)

  return (
    <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "300px" }}>
      {/* Logo */}
      <img
        src="..\assets\logo.png"
        alt="ben 10 logo"
        style={{
          position: "absolute",
          top: "10px",
          left: "538px",
          zIndex: 2,
          height: "260px",
          width: "250px",
        }}
      />

      {/* Scroll Image */}
      <motion.img
        src="..\assets\scroll.png"
        alt="scroll"
        style={{
          position: "absolute",
          top: "50px",
          height: "180px",
          zIndex: 1,
        }}
        initial={{ x: -200 }}
        animate={{ x: 555 }} // Stops near the logo
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: totalDuration - 4, // Wait for xlr animation to finish
        }}
      />

      {/* XLR Image */}
      <motion.img
        src="..\assets\xlr.png"
        alt="xlr"
        style={{
          position: "absolute",
          top: "50px",
          left: "780px",
          height: "190px",
          zIndex: 1,
        }}
        initial={{ x: -200 }}
        animate={{ x: 650 }}
        transition={{
          duration: 4,
          delay:4,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 4, // Matches scroll delay for seamless looping
        }}
      />
    </div>
  );
};

export default Ben;
