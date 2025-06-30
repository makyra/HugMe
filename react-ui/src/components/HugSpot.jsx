import React, { useState } from "react";
import "../styles/HugSpot.css";

function HugSpot({ canHug, onHug, hugCount }) {
  const [hugged, setHugged] = useState(false);

  const handleClick = () => {
    if (canHug) {
      setHugged(true); // trigger hug state
      onHug();
    }
  };

  return (
    <div 
      id="hug-spot"
      className="hug-spot" 
      onClick={handleClick}
    >
      {hugged && <div className="hug-animation">Hug time!</div>}

      <p className="hug-counter">
        {hugCount} hug{hugCount !== 1 && "s"} took place on the spot you’re standing
      </p>
    </div>
  );
}

export default HugSpot;