import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Встановлюємо початкові стани для нового запиту
    setIsLoading(true);
    setError(null);
    setData(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Помилка HTTP: ${response.status}`);
        }
        
        const json = await response.json();
        
        // Успішне отримання даних
        setData(json);
      } catch (e) {
        // Обробка помилки запиту
        setError(e);
      } finally {
        // Завершення завантаження
        setIsLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]); // Хук перезапускається, якщо URL зміниться [cite: 258]

  // Повертаємо всі ключові стани
  return { data, isLoading, error };
}

export default useFetch;