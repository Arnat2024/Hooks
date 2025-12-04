import React, { useRef } from "react";

function FocusInput() {
  // Створення рефа
  const inputRef = useRef(null);
  const checkRef = useRef(null);
  
  checkRef.current.checked=true;
  const handleFocus = () => {
    // Доступ до DOM-елемента через .current 
    if (inputRef.current) {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };
  const handleValue = () => {
    // Доступ до DOM-елемента через .current 
    if (inputRef.current) {
      console.log(inputRef.current.value);
     
    }
  }
  
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Фокусування вводу (useRef)</h3>
      {/* Прив'язка рефа до DOM-елемента */}
      <input ref={inputRef} placeholder="Натисніть кнопку, щоб фокусувати мене" />
      <button onClick={handleFocus} style={{ marginLeft: '10px' }}>
        Фокус
      </button>
      <button onClick={handleValue} style={{ marginLeft: '10px' }}>
        Value
      </button>
      <input type='checkbox' ref={checkRef} />
   
    </div>
  );
}

export default FocusInput;