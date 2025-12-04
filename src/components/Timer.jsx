import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // useEffect обробляє побічні ефекти[cite: 40].
  useEffect(() => {
    // 1. Побічний ефект (створення інтервалу)
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // 2. Функція очищення [cite: 41]
    // Вона виконується при демонтажі компонента або перед повторним запуском ефекту.
    return () => {
      clearInterval(interval);
    };
    
  // Порожній масив залежностей [] означає, що ефект виконається лише один раз, при монтуванні[cite: 42].
  }, []); 

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Таймер (useEffect)</h3>
      <p>Минуло часу: {seconds} с</p>
    </div>
  );
}

export default Timer;