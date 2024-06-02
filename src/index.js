import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const attributeId = {
  health: "health",
  stamina: "stamina",
  speed: "speed"
}

function CharacterAttributes({ totalPoints }) {
  const maxPerAttribute = Math.floor(totalPoints * 0.7);

  const [points, setPoints] = useState({
    health: 0,
    stamina: 0,
    speed: 0,
  });
  const remainingPoints = totalPoints - (points.health + points.stamina + points.speed);

  const handleChange = (attribute, value) => {
    const newPoints = {
      ...points,
      [attribute]: Math.min(value, maxPerAttribute),
    };

    if (newPoints.health + newPoints.stamina + newPoints.speed <= totalPoints) {
      setPoints(newPoints);
    }
  };

  return (
    <div>
      Character stats: <span id="points">{remainingPoints}</span> points left.
      <div>
          Health: {points.health}
          <input
            type="range"
            id={attributeId.health}
            min="0"
            max={maxPerAttribute}
            value={points.health}
            step="1"
            onChange={(e) => handleChange(attributeId.health, parseInt(e.target.value))}
          />
      </div>
      <div>
          Stamina: {points.stamina}
          <input
            type="range"
            id={attributeId.stamina}
            min="0"
            max={maxPerAttribute}
            value={points.stamina}
            step="1"
            onChange={(e) => handleChange(attributeId.stamina, parseInt(e.target.value))}
          />
      </div>
      <div>
          Speed: {points.speed}
          <input
            type="range"
            id={attributeId.speed}
            min="0"
            max={maxPerAttribute}
            value={points.speed}
            step="1"
            onChange={(e) => handleChange(attributeId.speed, parseInt(e.target.value))}
          />
      </div>
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharacterAttributes totalPoints={15} />);
