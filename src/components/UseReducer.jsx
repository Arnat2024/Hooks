import React, { useReducer } from 'react';

//  Функція-редюсер
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: action.payload };
    default:
      throw new Error();
  }
};

const initialState = { count: 0 };

function ComplexCounter() {
  //  Використання useReducer
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Складний лічильник (useReducer)</h3>
      <p>Поточне значення: {state.count}</p>
      
      <button onClick={() => dispatch({ type: 'increment' })} style={{ margin: '5px' }}>
        + Збільшити
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })} style={{ margin: '5px' }}>
        - Зменшити
      </button>
      <button onClick={() => dispatch({ type: 'reset', payload: 0 })} style={{ margin: '5px' }}>
        Скинути до 0
      </button>
      
      <p style={{ fontSize: 'small', color: '#666' }}>
        Уся логіка оновлення стану інкапсульована у функції `counterReducer`.
      </p>
    </div>
  );
}

export default ComplexCounter;