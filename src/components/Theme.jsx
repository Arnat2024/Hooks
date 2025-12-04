import React, { createContext, useContext, useState } from "react";

// 1. Створення контексту (з дефолтним значенням) [cite: 63]
const ThemeContext = createContext('light');

// Компонент-постачальник
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  const contextValue = { theme, toggleTheme };

  // 2. Надання значення через Provider [cite: 65]
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Дочірній компонент, який використовує контекст
function ThemeButton() {
  // 3. Використання useContext для доступу до даних [cite: 73]
  const { theme, toggleTheme } = useContext(ThemeContext);
  const style = {
    background: theme === 'dark' ? '#333' : '#f0f0f0',
    color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <button onClick={toggleTheme} style={style}>
      Поточна тема: {theme}
    </button>
  );
}

// Головний компонент
function ThemeApp() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px', border: '1px solid #ccc' }}>
        <h3>Керування темою (useContext)</h3>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default ThemeApp;