import React, { useState, useCallback } from "react";

// Дочірній компонент, оптимізований через React.memo
const ChildButton = React.memo(({ onClick, label }) => {
  console.log(`Рендеринг кнопки ${label}...`);
  return <button onClick={onClick} style={{ margin: '5px' }}>{label}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  // Мемоізована функція: її ідентичність не змінюється, якщо залежності [] не змінилися.
  const incrementCount = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Не має залежностей

  // Немемоізована функція: створюється заново при кожному рендерингу Parent
  const updateData = () => {
    setData(d => d + 1);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Оптимізація колбеків (useCallback)</h3>
      <p>Count: {count}</p>
      <p>Data: {data}</p>
      
      {/* Ця кнопка не буде ререндеритися, коли змінюється 'data' */}
      <ChildButton onClick={incrementCount} label="Збільшити Count (useCallback)" />
      
      {/* Ця кнопка буде ререндеритися при кожній зміні 'count' або 'data' */}
      <ChildButton onClick={updateData} label="Оновити Data (без useCallback)" />
    </div>
  );
}

export default Parent;