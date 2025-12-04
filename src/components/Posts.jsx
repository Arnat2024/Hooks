import React from 'react';
import useFetch from './useFetch'; // Припускаючи, що хук збережено в useFetch.js

function Posts() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  // Використання кастомного хука
  const { data: posts, isLoading, error } = useFetch(apiUrl); 

  // Обробка стану завантаження
  if (isLoading) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc' }}>
        <h3>Пости (useFetch)</h3>
        <p>Завантаження... </p>
      </div>
    );
  }

  // Обробка помилок
  if (error) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', color: 'red' }}>
        <h3>Пости (useFetch)</h3>
        <p>Помилка:  Не вдалося завантажити дані. ({error.message})</p>
      </div>
    );
  }

  // Відображення даних
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Пости (useFetch)</h3>
      {posts && posts.length > 0 ? (
        <>
          <p>Успішно завантажено {posts.length} постів.</p>
          <ul>
            {/* Відображаємо перші 3 пости для прикладу */}
            {posts.slice(0, 3).map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
            <li>...та ще {posts.length - 3} постів.</li>
          </ul>
        </>
      ) : (
        <p>Даних немає.</p>
      )}
    </div>
  );
}

export default Posts;