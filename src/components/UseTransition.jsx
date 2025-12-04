import React, { useState, useTransition } from 'react';

// Імітація ресурсомісткого списку
const generateList = (count) => {
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(`Елемент ${i + 1}`);
  }
  return list;
};

function TransitionSearch() {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState(''); // Стан для поля вводу (терміновий)
  const [listData, setListData] = useState([]);     // Стан для відображення (нетерміновий)

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Термінове оновлення: оновлює поле вводу одразу

    // Нетермінове оновлення: запускає перехід
    startTransition(() => {
      // Обчислення, яке може зайняти час, відбувається у фоновому режимі
      setListData(generateList(value.length * 100)); 
    });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Плавний пошук (useTransition)</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введіть текст для генерації списку..."
        style={{ width: '90%' }}
      />

      {isPending && <p style={{ color: 'blue' }}>Завантаження результатів...</p>}
      
      <div style={{ maxHeight: '150px', overflowY: 'scroll', marginTop: '10px' }}>
        {listData.map((item, index) => (
          <p key={index} style={{ margin: 0, padding: '2px 0' }}>
            {item}
          </p>
        ))}
        {!listData.length && !isPending && <p>Введіть щось для генерації списку.</p>}
      </div>
      
      <p style={{ fontSize: 'small', color: '#666', marginTop: '10px' }}>
        Поле вводу оновлюється миттєво, тоді як список оновлюється плавно, навіть якщо обчислення займає час.
      </p>
    </div>
  );
}
export default TransitionSearch;