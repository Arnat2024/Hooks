import React, { useState, useMemo } from 'react';

// Приклад "дорожньої" функції, яка потребує часу для виконання
const calculateFactorial = (n) => {
  console.log(`Обчислення факторіала для ${n}...`);
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    // Імітуємо затримку
    for (let j = 0; j < 10000000; j++); 
    result *= i;
  }
  return result;
};

function PerformanceComponent() {
  const [number, setNumber] = useState(10);
  const [count, setCount] = useState(0);

  // useMemo обчислює значення лише тоді, коли 'number' змінюється.
  const factorialResult = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Оптимізація обчислень (useMemo)</h3>
      
      {/*Поле для факторіала */}
      <label>
        Введіть число: 
        <input 
          type="number" 
          value={number} 
          onChange={(e) => setNumber(Number(e.target.value))} 
        />
      </label>
      <p>Факторіал ({number}) = {factorialResult}</p>
      
      <hr style={{ margin: '15px 0' }}/>

      {/* Незалежний лічильник */}
      <p>Незалежний лічильник: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Збільшити Count
      </button>
      
      <p style={{ fontSize: 'small', color: '#666' }}>
        Коли ви натискаєте "Збільшити Count", факторіал НЕ обчислюється повторно.
      </p>
    </div>
  );
}

export default PerformanceComponent;