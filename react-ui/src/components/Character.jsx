import React, { useState } from "react";
import huggerImg from "../assets/underwearboy.png";
import "../styles/Character.css";

export default function Character ({ onEnterHugSpot }) {
  // I guess this is starting point?
  const [position, setPosition] = useState({x: 100, y: 100})
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    let startX = e.clientX;
    let startY = e.clientY;

    const handleMouseMove = (moveEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      setPosition((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy
      }));

      startX = moveEvent.clientX;
      startY = moveEvent.clientY;

      const characterRect = moveEvent.target.getBoundingClientRect();
      const hugSpot = document.getElementById("hug-spot");
      if (hugSpot) {
        const hugRect = hugSpot.getBoundingClientRect();
        const isInside = 
        characterRect.left >= hugRect.left &&
        characterRect.right <= hugRect.right &&
        characterRect.top >= hugRect.top &&
        characterRect.bottom <= hugRect.bottom;

        onEnterHugSpot(isInside);
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <img
      src={huggerImg}
      alt="character"
      onMouseDown={handleMouseDown}
       style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      className="character"
    />
  );
}