import React, { useState } from "react";

function Counter() {
  // useState повертає поточний стан (count) та функцію для його оновлення (setCount).
  const [count, setCount] = useState(0);
  const [color, setColor] = useState({color:"red"});
  const [arr, setArr] = useState([1,2,3]);
  

  // Функція оновлення викликає повторний рендеринг компонента.
  const increment = () => {
    setCount(count + 1); // Оновлення стану
    setColor({color:'red'})
  };

  const decrement = () => {
    setCount(count - 1); // Оновлення стану
    setColor({color:'green'})
  };


  const push = () =>{
    setArr([...arr,1]);
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3 style={color}>Лічильник (useState)</h3>
      <p>Поточне значення: {count}</p>
      <button onClick={increment}>
        Збільшити на 1 - {count}
      </button>

       <button onClick={decrement}>
        Зменшити на 1 - {count}
      </button>
      <p>{arr}</p>
      <button onClick={push}>
        PUSH 1
      </button>
      
    </div>
  );
}

export default Counter;