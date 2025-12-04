import React, { useId, useState } from "react";

function UniqueFormFields() {
  // useId() генерує унікальний ID для цього конкретного компонента.
  const emailId = useId();
  const passwordId = useId();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Зауваження: Якщо цей компонент буде рендеритися кілька разів,
  // кожен екземпляр отримає СВІЙ унікальний ідентифікатор.

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Форма з унікальними ID (useId)</h3>
      
      {/* Поле Email */}
      <div style={{ marginBottom: '15px' }}>
        {/* Атрибут htmlFor прив'язується до згенерованого ID */}
        <label htmlFor={emailId} style={{ display: 'block' }}>
          Електронна пошта:
        </label>
        {/* Атрибут id на полі вводу повинен відповідати htmlFor на label */}
        <input
          id={emailId} 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@domain.com"
        />
      </div>

      {/* Поле Password (використовує інший згенерований ID) */}
      <div>
        <label htmlFor={passwordId} style={{ display: 'block' }}>
          Пароль:
        </label>
        <input
          id={passwordId} 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ваш пароль"
        />
      </div>

      <p style={{ marginTop: '20px', fontSize: 'small', color: '#666' }}>
        Згенеровані ID: Email="{emailId}", Password="{passwordId}"
      </p>
    </div>
  );
}

export default UniqueFormFields;