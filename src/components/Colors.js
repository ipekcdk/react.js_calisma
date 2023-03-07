import React, { useState } from "react";

//useState array kullanımı

function Colors() {
  const [colors, setColors] = useState(["kırmızı", "yeşil", "mavi"]);

  const handleClick = () => {
    setColors([...colors, "Gri"]);
    // ...colors : arrayin önceki halini korur
  };
  return (
    <div>
      <h2>Renkler</h2>
      {colors.map((color, i) => (
        <div key={i}>{color}</div>
      ))}
      <button onClick={handleClick}>Ekle</button>
    </div>
  );
}

export default Colors;
