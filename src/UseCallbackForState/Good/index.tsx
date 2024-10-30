import { useState } from 'react';

export default function UseCallbackForStateBad() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <main>
      <button type="button" onClick={handleClick}>
        +1 を10回するボタン
      </button>
      <p>{count}</p>
    </main>
  );
}
