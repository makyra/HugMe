import Character from "../components/Character";
import HugSpot from "../components/HugSpot";
import React, { useState, useEffect } from 'react';

function Hug() {
  const [canHug, setCanHug] = useState(false);
  const [hugCount, setHugCount] = useState(0);

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const storedDate = localStorage.getItem("hugDate");
    const storedCount = parseInt(localStorage.getItem("hugCount")) || 0;

    if (storedDate === today) {
      setHugCount(storedCount);
    } else {
      localStorage.setItem("hugDate", today);
      localStorage.setItem("hugCount", "0");
      setHugCount(0);
    }
  }, []);

  const incrementHugCount = () => {
    setHugCount((prev) => {
      const updated = prev + 1;
      localStorage.setItem("hugCount", updated.toString());
      return updated;
    });
  };

    return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Character name="hugger1" />
      <HugSpot canHug={canHug} onHug={incrementHugCount} hugCount={hugCount} />
    </div>
  );
}

export default Hug;
