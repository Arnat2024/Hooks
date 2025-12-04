import React, { useState, useOptimistic } from 'react';

// Імітація API-дзвінка
const saveComment = (newComment) => {
  return new Promise(resolve => {
    // Імітація затримки мережі
    setTimeout(() => {
      resolve({ id: Date.now(), text: newComment });
    }, 1500); 
  });
};

function OptimisticComments() {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');
  
  //  useOptimistic
  // optimisticComments: негайно оновлене значення
  // addOptimisticComment: функція для оптимістичного оновлення
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    // Редюсер: обробляє оптимістичне оновлення
    (currentComments, optimisticPayload) => {
      return [...currentComments, { text: optimisticPayload, isOptimistic: true }];
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    //  Оптимістичне оновлення
    addOptimisticComment(newCommentText);
    
    //  Справжній API-дзвінок
    const savedComment = await saveComment(newCommentText);
    
    //  Оновлення фактичного стану після підтвердження від сервера
    setComments(current => [...current, savedComment]);
    setNewCommentText('');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Оптимістичне оновлення (useOptimistic)</h3>

      <form onSubmit={handleSubmit}>
        <input
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Ваш коментар..."
        />
        <button type="submit" style={{ marginLeft: '10px' }}>
          Додати
        </button>
      </form>

      <ul style={{ marginTop: '15px', listStyleType: 'none', paddingLeft: 0 }}>
        {optimisticComments.map((comment, index) => (
          <li 
            key={comment.id || `temp-${index}`} 
            style={{ 
              opacity: comment.isOptimistic ? 0.6 : 1, 
              color: comment.isOptimistic ? 'gray' : 'black',
              fontStyle: comment.isOptimistic ? 'italic' : 'normal',
              borderBottom: '1px dotted #eee',
              padding: '5px 0'
            }}
          >
            {comment.text} {comment.isOptimistic && '(Надсилається...)'}
          </li>
        ))}
      </ul>
      
      <p style={{ fontSize: 'small', color: '#666', marginTop: '10px' }}>
        Коментар з'явиться одразу (сірим), а потім стане постійним після підтвердження сервера (1.5 с).
      </p>
    </div>
  );
}

export default OptimisticComments;